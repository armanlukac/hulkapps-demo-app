enum Role {
    //Default
    USER = 1,

    //Administrator
    //  Kreiranje novih korisnika, brisanje postojećih
    //  Dodavanje ili uklanjanje admin privilegija
    //  Pristup arhivi - recover ili brisanje arhiviranog sadržaja
    ADMIN = 2
}

export default Role