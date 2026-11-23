// supabaseClient.js
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Validação preventiva para evitar erros silenciosos em sala
if (!supabaseUrl || !supabaseKey) {
  console.error('❌ ERRO: Configure SUPABASE_URL e SUPABASE_KEY no arquivo .env!');
  process.exit(1);
}

// Cria e exporta a instância de conexão com a nuvem
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;