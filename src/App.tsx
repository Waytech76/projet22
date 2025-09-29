import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Normandie Tours
          </h1>
          <p className="text-lg text-gray-600">
            Частные туры по Нормандии с русскоговорящими гидами
          </p>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Добро пожаловать!
            </h2>
            <p className="text-gray-600 mb-6">
              Откройте красоту Нормандии с нашими эксклюзивными частными турами.
              Наши местные русскоговорящие гиды покажут вам самые живописные места региона.
            </p>

            <div className="text-center">
              <button
                onClick={() => setCount((count) => count + 1)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Кликов: {count}
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Живерни</h3>
              <p className="text-gray-600">Дом и сады Клода Моне</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Мон-Сен-Мишель</h3>
              <p className="text-gray-600">Средневековое аббатство на острове</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Этрета</h3>
              <p className="text-gray-600">Живописные белые скалы</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App