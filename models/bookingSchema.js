import mongoose from "mongoose"

const bookingCarSubmitFormSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    car_id:{
        type:String,
        ref:"CarSchema"
    },
    city:{
        type:String,
        require:true
    },
    service:{
        type:String,
        require:true
    },
    requirements:{
        type:String
    }
})
const bookingCarSubmitFormModel = mongoose.models.bookingForm || mongoose.model("bookingForm",bookingCarSubmitFormSchema);
export default bookingCarSubmitFormModel;
