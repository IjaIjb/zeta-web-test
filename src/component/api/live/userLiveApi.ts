import { AxiosGlobal } from "../shared/axios";
import{ AxiosPromise} from "axios";
import configs from "../../../config";
import { store } from "../../../store/store";
import qs from "qs";



export class UserLiveApis extends AxiosGlobal{
    
    adminLogin(data: any): AxiosPromise<Array<any>> {
        return this.axios.post(`${configs.context}/admin/login`, data, {
            headers: { "Content-Type": "application/x-www-form-urlencoded", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    createContact(data: any): AxiosPromise<Array<any>> {
        return this.axios.post(`${configs.context}/contact/create`, data, {
            headers: { "Content-Type": "application/x-www-form-urlencoded", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }


    registerPartner(partnerType: string, data: any) {
      return this.axios.post(
        `${configs.context}/partner/register/${partnerType}`, 
        data, // Convert object to URL-encoded format
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json",
            "Authorization": `Bearer ${store.getState().data.login.value.token}`,
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    registerWaitlist(data: any): AxiosPromise<Array<any>> {
        return this.axios.post(`${configs.context}/waiter/register`, data, {
            headers: { "Content-Type": "application/x-www-form-urlencoded", "Accept": "aplication/json", "Authorization": `Bearer ${store.getState().data.login.value.token}`, "Access-Control-Allow-Origin": "*" },
        });
    }

    fetchContacts(): AxiosPromise<Array<any>> {
        const token = localStorage.getItem("auth_token"); // Retrieve token from localStorage
        // console.log("Token used in request:", token);  // Log the token to check if it's correct

        return this.axios.get(`${configs.context}/admin/fetchContacts?page&limit`, {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": token ? `Bearer ${token}` : "",
            "Access-Control-Allow-Origin": "*",
          },
        });
      }

      fetchWaiters(): AxiosPromise<Array<any>> {
        const token = localStorage.getItem("auth_token"); // Retrieve token from localStorage
        // console.log("Token used in request:", token);  // Log the token to check if it's correct

        return this.axios.get(`${configs.context}/admin/fetchWaiters?page&limit`, {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": token ? `Bearer ${token}` : "",
            "Access-Control-Allow-Origin": "*",
          },
        });
      }

      fetchPartners(): AxiosPromise<Array<any>> {
        const token = localStorage.getItem("auth_token"); // Retrieve token from localStorage
        // console.log("Token used in request:", token);  // Log the token to check if it's correct

        return this.axios.get(`${configs.context}/admin/fetchPartners?page&limit`, {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": token ? `Bearer ${token}` : "",
            "Access-Control-Allow-Origin": "*",
          },
        });
      }
}