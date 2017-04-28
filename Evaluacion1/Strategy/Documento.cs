using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Evaluacion1.Strategy
{
    public class Documento
    {
        private Estrategia m_Estrategia;

        public Estrategia Estrategia
        {
            get { return m_Estrategia;}
            set { m_Estrategia = value; }
        }
        
        public Documento() { }

        ~Documento() { }

        public moneda respuesta()
        {
            return m_Estrategia.responder();
        } 


    }
}