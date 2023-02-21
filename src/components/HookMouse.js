import React, {useState, useEffect} from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', log)
    })

  return (
    <div>
        Hooks X - {x} y - {y}
    </div>
  )
}

export default HookMouse