import axios from "axios";



export const uploadImage = async(imageData) => {
    const uploadImg = new FormData();

    uploadImg.append("file", imageData);
    uploadImg.append("cloude_name", "dheweokqn");
    uploadImg.append("upload_preset", "product");

    let response = await axios.post(`https://api.cloudinary.com/v1_1/dheweokqn/image/upload`, uploadImg)
    // console.log(response);
    return response.data.secure_url;
}