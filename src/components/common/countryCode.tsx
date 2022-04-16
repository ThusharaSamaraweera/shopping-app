import { CountrySelect } from "../../types/checkoutAreaTypes";
import { Image } from "react-bootstrap";
import * as COUNTRY from "../constants/countries";

export const countryCode = (country: CountrySelect) => {
  if (country?.value === COUNTRY.UnitedStatesofAmerica) {
    return (
      <div>
        <Image src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/us.svg" />
        <span className="country-code">+1</span>
      </div>
    );
  } else if (country?.value === COUNTRY.Australia) {
    return (
      <div>
        <Image src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/as.svg" />
        <span className="country-code">+61</span>
      </div>
    );
  } else if (country?.value === COUNTRY.SriLanka) {
    return (
      <div>
        <Image src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/lk.svg" />
        <span className="country-code">+94</span>
      </div>
    );
  } else if (country?.value === COUNTRY.Singapore) {
    return (
      <div>
        <Image src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/sg.svg" />
        <span className="country-code">+65</span>
      </div>
    );
  } else if (country?.value === COUNTRY.India) {
    return (
      <div>
        <Image src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/in.svg" />
        <span className="country-code">+91</span>
      </div>
    );
  }
};
