import { useState, useEffect } from 'react'
import { findAll, savePerson } from './main.jsx'

export default function App() {
  const [names, setNames] = useState([])
  const [name, setName] = useState('')

  const loadData = async () => {
    const data = await findAll()
    setNames(data)
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleSave = async () => {
    await savePerson(name)
    setName('')
    loadData()
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSave}>Enviar</button>
      <br />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {names.map((itm, index) => (
            <tr key={itm.id || index}>
              <td>{itm.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}