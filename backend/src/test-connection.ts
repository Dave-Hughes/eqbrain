import { testConnection } from './lib/supabase'

async function main() {
    console.log('Testing Supabase connection...')
    const success = await testConnection()
    if (success) {
        console.log('✅ Connection test successful!')
    } else {
        console.log('❌ Connection test failed!')
    }
    process.exit(success ? 0 : 1)
}

main() 