'use client'

import { useState } from 'react'
import Link from 'next/link' // Import do Link para navegação
import { Leaf, Eye, EyeOff } from 'lucide-react'

export default function Cadastro() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Leaf className="mx-auto h-12 w-12 text-green-400" />
          <h2 className="mt-6 text-3xl font-extrabold text-white">EcoConnect</h2>
          <p className="mt-2 text-sm text-gray-400">Crie sua conta para um futuro sustentável</p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Nome completo</label>
              <input id="name" name="name" type="text" autoComplete="name" required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" 
                placeholder="Nome completo" />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">Endereço de e-mail</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" 
                placeholder="Endereço de e-mail" />
            </div>
            <div className="relative">
              <label htmlFor="password" className="sr-only">Senha</label>
              <input id="password" name="password" type={showPassword ? "text" : "password"} autoComplete="new-password" required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" 
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
            <div className="relative">
              <label htmlFor="confirm-password" className="sr-only">Confirmar senha</label>
              <input id="confirm-password" name="confirm-password" type={showConfirmPassword ? "text" : "password"} autoComplete="new-password" required 
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" 
                placeholder="Confirmar senha" />
              <button 
                type="button" 
                onClick={toggleConfirmPasswordVisibility} 
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                aria-label={showConfirmPassword ? "Ocultar confirmação de senha" : "Mostrar confirmação de senha"}
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div>
            <button type="submit" 
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Criar conta
            </button>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-gray-400">
          Já tem uma conta?{' '}
          <Link href="/Login" className="font-medium text-green-400 hover:text-green-300">
            Faça login
          </Link>
        </p>
      </div>
    </div>
  )
}
