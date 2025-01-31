// Needed because types are not exported from these libraries

declare module '@telus-uds/theme-allium' {
}

declare module "@telus-uds/components-web" {
    import * as lib from './telus-uds-components-web'
    const DatePicker: lib.DatePicker
    type DatePickerProps = lib.DatePickerProps
    // const DatePickerProps: lib.DatePickerProps
    const BaseProvider: lib.BaseProvider
}
