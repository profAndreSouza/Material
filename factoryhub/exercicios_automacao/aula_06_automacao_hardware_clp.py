"""
===================================================================
=== Encontro 06: Hardware de Controladores Lógicos Programáveis ===
===================================================================
"""

def inspecionar_hardware_clp():
    print("--- DIAGNÓSTICO DE HARDWARE CLP SMART N1 ---")
    rack_modules = [
        "Modulo 0: Power Supply 24VDC 5A",
        "Modulo 1: CPU Industrial Cortex M4 PROFINET",
        "Modulo 2: 16x Entradas Digitais 24VDC (DI)",
        "Modulo 3: 16x Saídas Digitais Transistor 0.5A (DO)",
        "Modulo 4: 4x Entradas Analógicas 4-20mA / 0-10V (AI)"
    ]
    for mod in rack_modules:
        print(f"Rack Slot Ok: {mod}")

if __name__ == '__main__':
    inspecionar_hardware_clp()
