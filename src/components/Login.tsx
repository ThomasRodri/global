'use client'

import { useState } from 'react'
import { Leaf, Eye, EyeOff } from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Leaf className="mx-auto h-12 w-12 text-green-400" />
          <h2 className="mt-6 text-3xl font-extrabold text-white">EcoConnect</h2>
          <p className="mt-2 text-sm text-gray-400">Faça login para acessar sua conta</p>
        </div>
        <form className="mt-8 space-y-4" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Endereço de e-mail</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" 
                placeholder="Endereço de e-mail" />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">Senha</label>
              <input id="password" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" 
                placeholder="Senha" />
              <button 
                type="button" 
                onClick={togglePasswordVisibility} 
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div className="mt-6">
            <button type="submit" 
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Entrar
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-400">
          Não tem uma conta?{' '}
          <a href="#" className="font-medium text-green-400 hover:text-green-300">
            Registre-se
          </a>
        </p>
      </div>
    </div>
  )
}