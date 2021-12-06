import * as Yup from "yup";
import TAGS_VALIDATITION_FROM from '../../tags_validation/tag_reel'
const Schema = Yup.object().shape({
    email: Yup.string().required(TAGS_VALIDATITION_FROM.EMIAL.IS_REQUIRED),
    name: Yup.string().required(TAGS_VALIDATITION_FROM.NAME.IS_REQUIRED),
    age: Yup.string().required(TAGS_VALIDATITION_FROM.AGE.IS_REQUIRED),
    role: Yup.string().required(TAGS_VALIDATITION_FROM.ROLE.IS_REQUIRED)
});

export default Schema;