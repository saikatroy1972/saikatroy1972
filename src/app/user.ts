export class User{

    // constructor(
    //     areaId: String,
    //     areaName: String,
    //     companyEmail: String,
    //     country: String,
    //     countryName: String,
    //     email: String,
    //     emailConfirmed: boolean,
    //     firstName: String,
    //     gstNumber: String,
    //     id: String,
    //     isActive: boolean,
    //     organizationAddress: String,
    //     organizationName: String,
    //     orginazationStateId: Number,
    //     orginazationStateName: String,
    //     panNumber: String,
    //     phoneNumber: String,
    //     pin: Number,
    //     poolingStationId: String,
    //     poolingStationName: String,
    //     roleName: String,
    //     state: String,
    //     stateName: String,
    //     subscriptionEndDate: String,
    //     surName: String,
    //     userName: String,
    // ){}

    id = "";
    userName = "";
    email = "";
    roleName = "";
    emailConfirmed = true;
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
    poolingStationName = "";
    stateName = "";
    areaName = "";
    countryName = "";
    subscriptionEndDate = "";
    isActive = true;
    orginazationStateId = 0;
    orginazationStateName = "";

    constructor(
        id_: string,
        userName_: string,
        email_: string,
        roleName_: string,
        emailConfirmed_: boolean,
        firstName_: string,
        surName_: string,
        organizationName_: string,
        organizationAddress_: string,
        gstNumber_: string,
        panNumber_: string,
        phoneNumber_: string,
        state_: string,
        companyEmail_: string,
        pin_: number,
        country_: string,
        poolingStationId_: string,
        areaId_: string,
        poolingStationName_: string,
        stateName_: string,
        areaName_: string,
        countryName_: string,
        subscriptionEndDate_: string,
        isActive_: boolean,
        orginazationStateId_: number,
        orginazationStateName_: string
    ){
        this.id = id_;
        this.userName = userName_;
        this.email = email_;
        this.roleName = roleName_;
        this.emailConfirmed = emailConfirmed_;
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
        this.poolingStationName = poolingStationName_;
        this.stateName = stateName_;
        this.areaName = areaName_;
        this.countryName = countryName_;
        this.subscriptionEndDate = subscriptionEndDate_;
        this.isActive = isActive_;
        this.orginazationStateId = orginazationStateId_;
        this.orginazationStateName = orginazationStateName_;
    }

}