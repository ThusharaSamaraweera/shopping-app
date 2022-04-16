import { CountrySelect } from "../../types/checkoutAreaTypes";
import { Australia, India, Singapore, SriLanka, UnitedStatesofAmerica } from "./countries";

// constant for checkout item table
export const columns = [{
  dataField: 'key',
  text: '#',
}, {
  dataField: 'image',
  text: 'Item',
}, {
  dataField: 'name',
  text: 'Name',
  sort: true
}, {
  dataField: 'qty',
  text: 'Qty',
}, {
  dataField: 'unitPrice',
  text: 'Unit Price',
}, {
  dataField: 'amount',
  text: 'Amount',
}, {
  dataField: 'removeIcon',
  text: '',
}];

export const options :any= {
  paginationSize: 4,
  pageStartIndex: 1,
  prePageText: 'Back',
  nextPageText: 'Next',
  lastPageText: '>>',
  nextPageTitle: 'First page',
  prePageTitle: 'Previous page',
  firstPageTitle: 'Next page',
  lastPageTitle: 'Last page',
  showTotal: true,
  sizePerPageList: [{
    text: '5', value: 5
  }, {
    text: '10', value: 10
  }, {
    text: '20', value: 20
  }, {
    text: '50', value: 50
  }, {
    text: '100', value: 100
  }]
};

// for country selection on checkout form
export const countries: CountrySelect[] = [
  {value: UnitedStatesofAmerica, label: UnitedStatesofAmerica},
  {value: Australia, label: Australia},
  {value: SriLanka, label: SriLanka},
  {value: Singapore, label: Singapore},
  {value: India, label: India}
];

// style for country selection on checkout form
export  const customStyles = {
  control: (provided: any) => ({
    ...provided,
    borderRadius: 3,
    borderColor: '#9E9E9E',
    minHeight: 27,
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: '.8em',
    height: '29px',
    cursor: 'pointer',
  }),
  indicatorsContainer: (provided: any) => ({
    ...provided,
    minHeight: 25,
    padding: '0px 8px 0px 8px',
    marginTop: -12
  }),
  valueContainer: (provided: any) => ({
    ...provided,
    paddingTop: 0,
    paddingBottom: 0,
    marginBottom: '10px',
  }),
  indicatorContainer: (provided: any) => ({
    ...provided,
    padding: '0px 8px 11px 8px',
  }),
  placeholder: (provided: any) => ({
    ...provided,
    paddingBottom: '2px'
  }),
  menu: (provided: any) => ({
    ...provided,
    marginTop: 1,
  }),
  option: (provided: any) => ({
    ...provided,
    fontSize: '.8rem',
    paddingTop: 2,
    paddingBottom: 2,
    cursor: 'pointer',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    paddingBottom: 2,
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    marginBottom: 17,
    marginTop: 15,
  }),
};