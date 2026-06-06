export const uploadToCloudinary = async (pics) => {
  const cloud_name = "duqol0ro3";

  if (pics) {
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "salon_booking_app");
    data.append("cloud_name", cloud_name);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      {
        method: "post",
        body: data,
      },
    );

    const fileData = await res.json();
    return fileData.secure_url;
  }else {
    console.log("No image found to upload")
  }
};
