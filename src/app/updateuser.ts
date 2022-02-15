export class updateuser{

    // {
    //     "id": "59db1034-afdc-4128-8dfa-08d987d2cb5f",
    //     "firstName": "string",
    //     "surName": "string",
    //     "organizationName": "string",
    //     "organizationAddress": "string",
    //     "gstNumber": "6565665",
    //     "panNumber": "6565665",
    //     "phoneNumber": "6658455545",
    //     "state": "24",
    //     "companyEmail": "company@yopmail.com",
    //     "pin": 0,
    //     "country": "1",
    //     "poolingStationId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //     "areaId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    //     "orginazationStateId": 0
    //   }

    id = "";
    firstName = "";
    surName = "";
    organizationName = "";
    organizationAddress = "";
    gstNumber = "";
    panNumber = "";
    phoneNumber = "";
    state = "";
    companyEmail = "";
    pin = 0;
    country = "";
    poolingStationId = "";
    areaId = "";
    orginazationStateId = 0;

    constructor(
        id_ : string,
        firstName_ : string,
        surName_ : string,
        organizationName_ : string,
        organizationAddress_ : string,
        gstNumber_ : string,
        panNumber_ : string,
        phoneNumber_ : string,
        state_ : string,
        companyEmail_ : string,
        pin_ : number,
        country_ : string,
        poolingStationId_ : string,
        areaId_ : string,
        orginazationStateId_ : number,
    ){
        this.id = id_;
        this.firstName = firstName_;
        this.surName = surName_;
        this.organizationName = organizationName_;
        this.organizationAddress = organizationAddress_;
        this.gstNumber = gstNumber_;
        this.panNumber = panNumber_;
        this.phoneNumber = phoneNumber_;
        this.state = state_;
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
            "id": this.id,
            "firstName": this.firstName,
            "surName": this.surName,
            "organizationName": this.organizationName,
            "organizationAddress": this.organizationAddress,
            "gstNumber": this.gstNumber,
            "panNumber": this.panNumber,
            "phoneNumber": this.phoneNumber,
            "state": this.state,
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


