// Needed because types are not exported from these libraries

declare module '@telus-uds/theme-allium' {
}

declare module "@telus-uds/components-web" {
    import * as lib from './telus-uds-components-web'
    const BaseProvider : lib.BaseProvider
    const Box : lib.Box
    const Button = lib.Button
    const CheckBox = lib.Checkbox
    const CheckboxGroup = lib.CheckboxGroup
    const DatePicker: lib.DatePicker
    const FileUpload = lib.FileUpload
    const FlexGrid = lib.FlexGrid
    const Image = lib.Image
    const Listbox = lib.Listbox
    const Modal = lib.Modal
    const SideNav = lib.SideNav
    const TextInput = lib.TextInput
    const Typography = lib.Typography
    type DatePickerProps = lib.DatePickerProps
}
