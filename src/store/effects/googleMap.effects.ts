import { AppDispatch } from "..";
import { GetAdressesRequest, SendAdressesRequest } from "../../services/auth.service";
import { MarkerType } from "../../services/types";
import { setLoadingEffect } from "./auth.effects";
import { toast } from "react-toastify";

export const sendAddressesEffect = (AddressesList: MarkerType[], userId: string): any => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoadingEffect(true));
      await SendAdressesRequest(AddressesList, userId);
      toast.success("Successfully sended addresses");
    } catch (error: any) {
      toast.error("sended addresses faild");
    } finally {
      console.log("");

    }
  };
};

export const getAddressesEffect = async (userId: string): Promise<any> => {
  try {
    const { data: { addresses } } = await GetAdressesRequest(userId);
    console.log("addressesData", addresses);
    return addresses

  } catch (error: any) {
    toast.error("sended addresses faild");
  } finally {
    console.log("");

  }
};
