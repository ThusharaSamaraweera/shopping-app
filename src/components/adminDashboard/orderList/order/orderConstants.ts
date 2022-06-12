export const styleSelect: any = {
  control: (base: any) => ({
    ...base,
    cursor: 'pointer',
    fontSize: "1rem;",
    "@media only screen and (max-width: 992px)": {
      ...base["@media only screen and (max-width: 992px)"],
      fontSize: "0.8rem;",
    }
  }),
  option: (base: any) => ({
    ...base,
    cursor: 'pointer',
    zIndex: 5,
    fontSize: "1rem;",
    "@media only screen and (max-width: 992px)": {
      ...base["@media only screen and (max-width: 992px)"],
      fontSize: "0.8rem;",
    }
  }),
  placeholder: (base: any) => ({
    ...base,
    fontSize: "1rem;",
    "@media only screen and (max-width: 992px)": {
      ...base["@media only screen and (max-width: 992px)"],
      fontSize: "0.8rem;",
    }
  })
}