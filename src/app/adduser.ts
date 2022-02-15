export class adduser{

    // {
    //     "userName": "string",
    //     "email": "string",
    //     "firstName": "string",
    //     "surName": "string",
    //     "password": "string",
    //     "organizationName": "string",
    //     "organizationAddress": "string",
    //     "gstNumber": "string",
    //     "panNumber": "string",
    //     "phoneNumber": "string",
    //     "state": "string",
    //     "roleName": "string",
    //     "companyEmail": "string",
    //     "pin": 0,
    //     "country": "string",
    //     "poolingStationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //     "areaId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //     "orginazationStateId": 0
    // }

    userName = "";
    email = "";
    firstName = "";
    surName = "";
    password = "";
    organizationName = "";
    organizationAddress = "";
    gstNumber = "";
    panNumber = "";
    phoneNumber = "";
    state = "";
    roleName = "";
    companyEmail = "";
    pin = 0;
    country = "";
    poolingStationId = "";
    areaId = "";
    orginazationStateId = 0

    constructor(
        userName_ : string,
        email_ : string,
        firstName_ : string,
        surName_ : string,
        password_ : string,
        organizationName_ : string,
        organizationAddress_ : string,
        gstNumber_ : string,
        panNumber_ : string,
        phoneNumber_ : string,
        state_ : string,
        roleName_ : string,
        companyEmail_ : string,
        pin_ : number,
        country_ : string,
        poolingStationId_ : string,
        areaId_ : string,
        orginazationStateId_ : number
    ){
        this.userName = userName_;
        this.email = email_;
        this.firstName = firstName_;
        this.surName = surName_;
        this.password = password_;
        this.organizationName = organizationName_;
        this.organizationAddress = organizationAddress_;
        this.gstNumber = gstNumber_;
        this.panNumber = panNumber_;
        this.phoneNumber = phoneNumber_;
        this.state = state_;
        this.roleName = roleName_;
        this.companyEmail = companyEmail_;
        this.pin = pin_;
        this.country = country_;
        this.poolingStationId = poolingStationId_;
        this.areaId = areaId_;
        this.orginazationStateId = orginazationStateId_;
    }

    toJson(){

        var json = 
        {
            "userName": this.userName,
            "email": this.email,
            "firstName": this.firstName,
            "surName": this.surName,
            "password": this.password,
            "organizationName": this.organizationName,
            "organizationAddress": this.organizationAddress,
            "gstNumber": this.gstNumber,
            "panNumber": this.panNumber,
            "phoneNumber": this.phoneNumber,
            "state": this.state,
            "roleName": this.roleName,
            "companyEmail": this.companyEmail,
            "pin": this.pin,
            "country": this.country,
            "poolingStationId": this.poolingStationId,
            "areaId": this.areaId,
            "orginazationStateId": this.orginazationStateId
        }

        return json;

    }

}
