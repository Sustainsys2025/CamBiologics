// Import from CDN instead of npm
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const supabaseUrl = 'https://wyeouenrdlpmwetnfdtj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5ZW91ZW5yZGxwbXdldG5mZHRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0ODgyNTgsImV4cCI6MjA4NjA2NDI1OH0.xNjOEDzhyLjYx5RBx87xZlCplJU_2Dr3za0FrxLjvYE'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
