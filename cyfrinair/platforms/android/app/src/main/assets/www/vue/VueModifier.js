class VueModifier{

    constructor(){
        this.html = document.getElementById("html-vue-modifier").innerHTML;
        //this.ajouterPass = null;
    }

    /*
    initialiserAjout(AjouterPass){
        this.AjouterPass = AjouterPass;
    }*/

    afficher(infosClient){
        document.getElementsByTagName("body")[0].innerHTML = this.html;
        //document.getElementById("form-ajouter").addEventListener("submit", evenement => this.enregistrer(evenement));
         document.getElementById("site").value = infosClient.site;
         document.getElementById("utilisateur").value = infosClient.utilisateur;
         document.getElementById("description").value = infosClient.description;
    }

    /*
    enregistrer(evenement){
        evenement.preventDefault();

        let website = doument.getElementById("password-website").value;
        let user = doument.getElementById("password-user").value;
        let password = genererPassword();
        let description = doument.getElementById("password-description").value;

        this.ajouterPass(new Password(website, user, password, description, null))
    }

    genererPassword(){

        // TODO

        return "f1jef8910efjefh1634fg";
    }
    */
}