// Servidor Express - Projeto #30: Monitoramento de Qualidade da Água
require('dotenv').config();
const express = require('express');
const supabase = require('./src/config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3030;

app.get('/api/hidrometria/status', (req, res) => {
    res.status(200).json({
        projeto_numero: 30,
        sistema: "Monitoramento de Qualidade da Água",
        categoria: "Meio Ambiente & IoT",
        tabela_conectada: process.env.TABELA_ALVO || "sensores_reservatorio",
        parametro_ambiente: process.env.ESTACAO_TRATAMENTO || "ETA_CRISTAL_30",
        ponte_supabase_ativa: Boolean(supabase && supabase.rest),
        cofre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});

app.listen(PORT, () => {
    console.log(`🚀 [PROJETO #30] Monitoramento de Qualidade da Água rodando em http://localhost:${PORT}/api/hidrometria/status`);
});