import { NgModule } from '@angular/core';
import { AuthModule, LogLevel} from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'https://identityserver.dev.axa.com.mx:443/t/contribuidores.axa.com.mx',
            authWellknownEndpointUrl: 'https://identityserver.dev.axa.com.mx:443/t/contribuidores.axa.com.mx/oauth2/oidcdiscovery/.well-known/openid-configuration',
            redirectUrl: 'https://zamxciscodedvue2sto01.z20.web.core.windows.net',
            postLogoutRedirectUri: 'https://zamxciscodedvue2sto01.z20.web.core.windows.net',
            clientId: 'TUbEB5VO7skuUd_Rj7uEVKaIi8Ea',
            scope: 'openid profile email offline_access api',
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
            logLevel: LogLevel.Debug,
            configId: 'TUbEB5VO7skuUd_Rj7uEVKaIi8Ea',
            allowUnsafeReuseRefreshToken: true,
            postLoginRoute: 'https://zamxciscodedvue2sto01.z20.web.core.windows.net'
          }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
