// Needed because types are not exported from these libraries

declare module '@telus-uds/theme-allium' {
}

declare module "@telus-uds/components-web" {
    import * as lib from './telus-uds-components-web'
    const DatePicker: lib.DatePicker
    type DatePickerProps = lib.DatePickerProps
    const BaseProvider : lib.BaseProvider
    const Box : lib.Box
    const Modal = lib.Modal
    const SideNav = lib.SideNav
    const TextInput = lib.TextInput
    const Typography = lib.Typography
    const CheckBox = lib.Checkbox
    const CheckboxGroup = lib.CheckboxGroup
    const Button = lib.Button
    const Listbox = lib.Listbox
    const FlexGrid = lib.FlexGrid
}
