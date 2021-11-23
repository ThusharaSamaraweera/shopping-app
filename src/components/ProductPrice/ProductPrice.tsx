import React from "react"
import NumberFormat from "react-number-format"

export const ProductPrice = (priceMain: number, priceCents: string | number, priceIntegerClass: string, 
              priceCentsClass: string, DecimalScale: number | undefined, fixedDecimalScale: boolean
              ) => {
  return(
    <React.Fragment>
      <NumberFormat thousandSeparator={true}
                    displayType={'text'}
                    prefix={'Rs. '}
                    value={priceMain}
                    className={priceIntegerClass}
                    decimalScale={DecimalScale}
                    fixedDecimalScale={fixedDecimalScale}
    />.<span className={priceCentsClass}>{priceCents}</span>
  </React.Fragment>
  )
}