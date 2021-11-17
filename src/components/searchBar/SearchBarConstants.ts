const styleSelect: any = {
  control: (base: any) => ({
    ...base,
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: "row-reverse",
    boxShadow: 0,
  }),
  valueContainer: (base: any) => ({
    ...base,
    fontSize: 15,
    paddingLeft: 10,
    cursor: 'text',
    flexDirection: "row-forward"
  }),
  placeholder: (base: any) => ({
    ...base,
    color: '#6c757d',
    fontWeight: 400
  }),

  indicatorSeparator: (base: any) => ({
    ...base,
    display: 'none'
  }),
}

const themeSelect: any = (theme: any) => {
  return {
    ...theme,
    borderRadius: 5,
    borderWidth: 0.8,
    colors: {
      ...theme.colors,
      primary25: '#f5f5f5',
      primary: '#4caf50',
      neutral30: '#4caf50'
    },
  }
}

export {styleSelect, themeSelect};