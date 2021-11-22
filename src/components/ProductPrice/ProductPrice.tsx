import React from "react"
import NumberFormat from "react-number-format"

export const ProductPrice = (priceMain: number, priceCents: string | number, priceIntegerClass: string, priceCentsClass: string) => {
  return(
    <React.Fragment>
      <NumberFormat thousandSeparator={true}
                    displayType={'text'}
                    prefix={'Rs. '}
                    value={priceMain}
                    className={priceIntegerClass}
    />.<span className={priceCentsClass}>{priceCents}</span>
  </React.Fragment>
  )
}