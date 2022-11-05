export class JwtToken{
    public accessToken: string = null;
    public tokenType: string = null;
    public refreshToken: string = null;
    public expiresIn: number = -1;
    public scope: string = null;
    public lastLoginTime: number = null;
    public userId: number = null;
    public userFullName: string = null;
    public jti: string = null;
    public isLoggedIn : boolean = false;
    public accountVerified: boolean = false;

    constructor(){
       
    }

    public loadTokenFronJwt(token: any, loggedIn:boolean){
        this.accessToken=token.access_token;
        this.tokenType=token.token_type;
        this.refreshToken=token.refresh_token;
        this.expiresIn=Number(token.expires_in);
        this.scope=token.scope;
        this.lastLoginTime=Number(token.lastLoginTime);
        this.userId=Number(token.id);
        this.userFullName=token.fullname;
        this.jti=token.jti;
        this.isLoggedIn=loggedIn;
        this.accountVerified=token.accountVerified;
    }

    public loadTokenFromValues(token: string, userName: string,userLoggedIn: boolean, userId: number){
        this.accessToken=token;
        this.userFullName = userName;
        this.isLoggedIn = userLoggedIn;
        this.userId = userId;
    }

}