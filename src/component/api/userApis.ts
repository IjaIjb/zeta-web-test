import { AxiosPromise } from "axios";
import configs from "../../config";

import { UserLiveApis } from "./live/userLiveApi";



export class UserApis {
    private static userLiveApis: UserLiveApis = new UserLiveApis();
    
  

    static createContact(data:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.userLiveApis.createContact(data);
        }
    }
    
    static adminLogin(data:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.userLiveApis.adminLogin(data);
        }
    } 

    static registerPartner(partnerType: string, data:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.userLiveApis.registerPartner(partnerType, data);
        }
    } 

    static registerWaitlist(data:any): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.userLiveApis.registerWaitlist(data);
        }
    } 

    static fetchContacts(): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.userLiveApis.fetchContacts();
        }
    }

    static fetchWaiters(): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.userLiveApis.fetchWaiters();
        }
    }

    static fetchPartners(): AxiosPromise<any> {
        if (configs.type === "LOCAL") {
            return {} as AxiosPromise;
        } else {
            return this.userLiveApis.fetchPartners();
        }
    }


}