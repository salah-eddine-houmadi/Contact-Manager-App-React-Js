import axios from "axios";

export class ContactService{
    static serverURL = `http://localhost:9000`;

    static getGroups(){
        let dataURL = `${this.serverURL}/groups`;
        return axios.get(dataURL);
    }

    static getGroup(contact :any){
        let groupId = contact.groupId;
        let dataURL = `${this.serverURL}/groups/${groupId}`;
        return axios.get(dataURL);

    }

    static getALLContacts(){
        let dataURL = `${this.serverURL}/contacts`;
        return axios.get(dataURL);
    }

    static getContact(contactID:any){
        let dataURL = `${this.serverURL}/contacts/${contactID}`;
        return axios.get(dataURL);
    }

    static createCantact(contact:any){
        let dataURL = `${this.serverURL}/contacts`;
        return axios.post(dataURL,contact)
    }

    static updateContact(contact:any,contactID:any){
        let dataURL = `${this.serverURL}/contacts/${contactID}`;
        return axios.put(dataURL,contact);

    }

    static deleteContact(contactID : any){
        let dataURL = `${this.serverURL}/contacts/${contactID}`;
        return axios.delete(dataURL);
    }
}