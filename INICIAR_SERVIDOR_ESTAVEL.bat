@echo off
echo ============================================================
echo = INICIAR SERVIDOR BACKEND ESTAVEL =
echo ============================================================
echo.

:: 1. Limpar processos antigos
echo [1/4] Limpando processos Node.js antigos...
taskkill /f /im node.exe >nul 2>&1
echo     Processos antigos finalizados.

:: 2. Aguardar um momento
echo [2/4] Aguardando liberação da porta...
timeout /t 3 >nul

:: 3. Iniciar servidor estável
echo [3/4] Iniciando servidor backend estável...
cd /d "%~dp0backend"
start "Backend Estável" cmd /k "node server-estavel.js"
echo     Servidor iniciado em janela separada.

:: 4. Aguardar servidor inicializar
echo [4/4] Aguardando servidor inicializar...
timeout /t 5 >nul

:: 5. Verificar servidor
echo.
echo ============================================================
echo = VERIFICANDO SERVIDOR =
echo ============================================================
echo.

echo Testando conexão com o servidor...
powershell -Command "try { Test-NetConnection -ComputerName localhost -Port 3000 -ErrorAction Stop | Out-Null; Write-Host 'Servidor: [ONLINE]' -ForegroundColor Green } catch { Write-Host 'Servidor: [OFFLINE]' -ForegroundColor Red }"

echo.
echo Testando endpoint health...
powershell -Command "try { $response = Invoke-WebRequest -Uri http://localhost:3000/api/health -UseBasicParsing -TimeoutSec 10; Write-Host 'Health: [OK]' -ForegroundColor Green; Write-Host 'Status:' $response.StatusCode } catch { Write-Host 'Health: [ERRO]' -ForegroundColor Red; Write-Host 'Erro:' $_.Exception.Message }"

echo.
echo ============================================================
echo = SERVIDOR PRONTO =
echo ============================================================
echo.
echo URLs de Acesso:
echo   Backend: http://localhost:3000
echo   Health: http://localhost:3000/api/health
echo.
echo Endpoints disponíveis:
echo   GET /api/health
echo   GET /api/members
echo   GET /api/units
echo   GET /api/clubs
echo   GET /api/point-types
echo   GET /api/ranking/members
echo   GET /api/ranking/units
echo   POST /api/auth/login
echo.
echo Mantenha a janela do servidor aberta.
echo Fechar a janela irá parar o servidor.
echo.
echo Pressione qualquer tecla para sair...
pause >nul
