import React, { FC, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./googleMap.css"
import { PublicButton } from "../../public/Button";
import { AppDispatch, RootState, useAppSelector } from "../../store";
import { useDispatch } from "react-redux";
import { MarkerType } from "../../services/types";
import { IGoogleMapContainer } from "../interfaces";
import { sendAddressesEffect } from "../../store/effects/googleMap.effects";




const GoogleMapContainer: FC<IGoogleMapContainer> = ({ user }) => {
    const dispatch: AppDispatch = useDispatch()

    const center = { lat: 40.204074, lng: 44.511667 }
    const [markers, setMarker] = useState<MarkerType[]>([center])

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY as string,
    });

    const setaMarkerCordinats = (newLat: number, newLng: number) => {
        setMarker((state: MarkerType[]) => {
            return (
                [...state, ...[{ lat: newLat, lng: newLng }]]
            )
        })
    }

    const sendAddreses = () => {
        dispatch(sendAddressesEffect(markers, user.userId))
    }


    return (
        isLoaded ?
            <>
                <GoogleMap
                    zoom={10}
                    center={center}
                    mapContainerClassName="map-container"
                    onClick={(e: any) => {
                        console.log();

                        setaMarkerCordinats(e.latLng.lat(), e.latLng.lng())
                    }}
                >
                    {markers.map((markers: any, key: number) => {
                        return <Marker position={markers} key={key} />
                    })}

                </GoogleMap>
                <div onClick={() => { sendAddreses() }}>
                    <PublicButton text={"sendAddreses"} />
                </div>
            </>
            :
            <div>asd</div>
    );
}

export default GoogleMapContainer