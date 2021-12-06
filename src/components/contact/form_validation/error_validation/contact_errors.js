export default function errorHandle(errors){
    return {
        email(){
            return errors.email && (<div>{errors.email}</div>)
        },
        
        name(){
            return errors.name && (<div>{errors.name}</div>)
        },
        phone(){
            return errors.phone && (<div>{errors.phone}</div>)
        },
        msj(){
            return errors.msj && (<div>{errors.msj}</div>)
        },

    }
}