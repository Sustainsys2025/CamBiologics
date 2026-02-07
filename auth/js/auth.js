import { supabase } from './supabase-config.js'

// Registration
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault()
    
    const fullName = document.getElementById('fullName').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value
    const password = document.getElementById('password').value
    
    const messageDiv = document.getElementById('message')
    messageDiv.innerHTML = '<p>Registering...</p>'
    
    try {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    full_name: fullName,
                }
            }
        })
        
        if (error) throw error
        
        // Update profile with phone
        if (data.user) {
            await supabase
                .from('profiles')
                .update({ phone: phone })
                .eq('id', data.user.id)
        }
        
        messageDiv.innerHTML = '<p style="color: green;">✅ Registration successful! Check your email to confirm.</p>'
        document.getElementById('registerForm').reset()
        
    } catch (error) {
        messageDiv.innerHTML = `<p style="color: red;">❌ Error: ${error.message}</p>`
    }
})

// Login
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault()
    
    const email = document.getElementById('loginEmail').value
    const password = document.getElementById('loginPassword').value
    
    const messageDiv = document.getElementById('loginMessage')
    messageDiv.innerHTML = '<p>Logging in...</p>'
    
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        
        if (error) throw error
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html'
        
    } catch (error) {
        messageDiv.innerHTML = `<p style="color: red;">❌ Error: ${error.message}</p>`
    }
})
