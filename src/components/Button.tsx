import './btn.css'

export default function Button({ btnMsg }: { btnMsg: string }) {
  return (
    <button className="btn">{btnMsg}</button>
  )
}
