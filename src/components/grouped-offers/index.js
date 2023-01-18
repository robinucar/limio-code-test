// @flow
import * as React from "react"
import { useState } from "react"
import { useLimio } from "@limio/sdk"
import { groupOffers } from "@limio/utils/offers"
import OfferGroup from "./components/OfferGroup.js"
import "./index.css"

const groupLabels = [{ id: "digital", label: "Digital" }, { id: "bundle", label: "Physical" }]

export function GroupedOffers(): React.Node {
  const { shop: { offers } } = useLimio()
  const offerGroups = groupOffers(offers, groupLabels)

  const [selectedGroup, setSelectedGroup] = useState("digital")

  return (
      <div id={"grouped-offers-component"} className="grouped-offers">
          <div className="grouped-offers-wrapper">
          {offerGroups.map((offerGroup, index) => {
            const { groupId, id, label, offers, thumbnail } = offerGroup
            return (
                <OfferGroup
                    key={`offer-group-${index}`}
                    groupId={groupId}
                    id={id}
                    label={label}
                    offers={offers}
                    bestValueText={"Best Value"}
                    buttonText={"Subscribe"}
                    buttonUrl={"/"}
                    thumbnail={thumbnail}
                    preselectFirstOfferInGroup={true}
                    selectedGroup={selectedGroup}
                    setSelectedGroup={setSelectedGroup}
                />
            )
          })}
        </div>
      </div>
  )
}

GroupedOffers.whyDidYouRender = true
export default GroupedOffers
