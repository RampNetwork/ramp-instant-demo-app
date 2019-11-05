import Decimal from 'decimal.js-light';

interface ICodeGenProps {
  swapAmount: string;
  swapAsset: string;
  userAddress: string;
  useRefundedFees: boolean;
}

export function generateIntegrationCode(codeParams: ICodeGenProps): string {
  const token = getHostTokenForRefundedFees(codeParams.useRefundedFees);

  return `
import { RampInstantSDK } from '@ramp-network/ramp-instant-sdk';

/*
 *  Quick Integration
 */
new RampInstantSDK({
  hostAppName: 'Maker DAO',
  hostLogoUrl: 'https://cdn-images-1.medium.com/max/2600/1*nqtMwugX7TtpcS-5c3lRjw.png',
  variant: 'auto',
}).show();


/*
 *  Advanced Integration
 */
new RampInstantSDK({
  hostAppName: 'Maker DAO',
  hostLogoUrl: 'https://cdn-images-1.medium.com/max/2600/1*nqtMwugX7TtpcS-5c3lRjw.png',
  swapAmount: '${codeParams.swapAmount}',
  swapAsset: '${codeParams.swapAsset}',
  userAddress: '${codeParams.userAddress}',
  url: '${process.env.REACT_APP_URL}', // only specify the url if you want to use testnet widget versions,
  // use variant: 'auto' for automatic mobile / desktop handling,
  // 'mobile' to force mobile version
  // 'desktop' to force desktop version (default)
  variant: 'auto',
  ${token ? `hostApiKey: '${token}',`: ''}
})
  .on('*', console.log)
  .show();
  `.trim();
}

export function convertIntStringToWeiString(amount: string): string {
  try {
    const multiplier = new Decimal(10).pow(18);
    return new Decimal(amount).times(multiplier).toString();
  } catch (e) {
    return '0';
  }
}

export function getHostTokenForRefundedFees(useRefundedFees: boolean): string | null {
  const refundedFeesApiToken = process.env.REACT_APP_REFUNDED_FEES_API_TOKEN;

  return !useRefundedFees || !refundedFeesApiToken ? null : refundedFeesApiToken;
}