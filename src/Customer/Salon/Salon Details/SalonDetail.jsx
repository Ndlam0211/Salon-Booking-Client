import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSalonById } from "../../../Redux/Salon/action";

const SalonDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {salon} = useSelector(store => store)

  useEffect(() => {
    if (id) dispatch(fetchSalonById(id));
  }, [id]);
  return (
    <div className="space-y-5 mb-20">
      <section className="grid grid-cols-2 gap-3">
        <div className="col-span-2">
          <img
            className="w-full rounded-md h-[15rem] object-cover"
            src={salon.salon?.images[0] || "https://res.cloudinary.com/dxoqwusir/image/upload/v1732934203/barber-5497152_1280_zgcao8.jpg"}
            alt=""
          />
        </div>
        <div className="col-span-1">
          <img
            className="w-full rounded-md h-[15rem] object-cover"
            src={salon.salon?.images[1] || "https://res.cloudinary.com/dxoqwusir/image/upload/v1732934203/barber-5497152_1280_zgcao8.jpg"}
            alt=""
          />
        </div>
        <div className="col-span-1">
          <img
            className="w-full rounded-md h-[15rem] object-cover"
            src={salon.salon?.images[2] || "https://res.cloudinary.com/dxoqwusir/image/upload/v1732934217/beauty-salon-4043096_1280_itrjdr.jpg"}
            alt=""
          />
        </div>
      </section>

      <section className="space-y-3">
        <h1 className="font-bold text-3xl">{salon.salon?.name}</h1>
        <p>{salon.salon?.address}</p>
        <p>
          <strong>Timing:</strong> {salon.salon?.openingTime} To {salon.salon?.closingTime}
        </p>
      </section>
    </div>
  );
};

export default SalonDetail;
