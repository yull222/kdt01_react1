import MyToggleBox from "./MyToggleBox"

export default function MyToggle() {
  return (
    <div className="w-10/12 grid grid-cols-2 gap-4">
      <MyToggleBox color="blue" />
      <MyToggleBox color="orange" />
    </div>
  )
}