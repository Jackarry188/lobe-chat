import pkg from '@/../package.json';
import { getServerDBConfig } from '@/config/db';

import { BRANDING_NAME, ORG_NAME } from './branding';

export const CURRENT_VERSION = pkg.version;

export const isServerMode = getServerDBConfig().NEXT_PUBLIC_ENABLED_SERVER_SERVICE;
console.log('11isServerMode', isServerMode);
console.log('process.env.NEXT_PUBLIC_SERVICE_MODE', process.env.NEXT_PUBLIC_SERVICE_MODE);
export const isUsePgliteDB = process.env.NEXT_PUBLIC_CLIENT_DB === 'pglite';

export const isDeprecatedEdition = !isServerMode && !isUsePgliteDB;

// @ts-ignore
export const isCustomBranding = BRANDING_NAME !== 'LobeChat';
// @ts-ignore
export const isCustomORG = ORG_NAME !== 'LobeHub';
