import React, { FC } from "react"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getAddressesEffect } from "../../store/effects/googleMap.effects"
import { IAddressesContainer } from "../interfaces"

const AddressesContainer: FC<IAddressesContainer> = ({ user }) => {

  const [addresses, setAddresses] = useState([])
  const distpatch = useDispatch()
  useEffect(() => {
    const fetchData = async () => {
      const address = await getAddressesEffect(user.userId)
      setAddresses(address)

    }
    fetchData()
      .catch(console.error);
  }, [])


  return (
    <div>
      {
        addresses && addresses.map((address) => {
          return (
            <div>
              as
            </div>
          )
        })
      }
    </div>
  )
}

export default AddressesContainer