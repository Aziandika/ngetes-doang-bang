const fs = require('fs')
let _RPG = JSON.parse(fs.readFileSync('./database/user/rpg/inventori.json'))


//== Emas Inventory   

        const addEmas = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].emas += amount
                fs.writeFileSync('./database/user/rpg/inventori.json', JSON.stringify(_RPG))
            }
        }
        
        const sellEmas = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].emas -= amount
                fs.writeFileSync('./database/user/rpg/inventori.json', JSON.stringify(_RPG))
            }
        }        
        
        const getEmas = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].emas
            }
        }

//== Diamond Inventory

     const addDm = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].diamond += amount
                fs.writeFileSync('./database/user/rpg/inventori.json', JSON.stringify(_RPG))
            }
        }
        
     const sellDm = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].diamond -= amount
                fs.writeFileSync('./database/user/rpg/inventori.json', JSON.stringify(_RPG))
            }
        }
              
           const getDm = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].diamond
            }
        }
           
//== Iron Inventory
        
       const addBesi = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].besi += amount
                fs.writeFileSync('./database/user/rpg/inventori.json', JSON.stringify(_RPG))
            }
        }
        
       const sellBesi = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].besi -= amount
                fs.writeFileSync('./database/user/rpg/inventori.json', JSON.stringify(_RPG))
            }
        }
                
       const getBesi = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].besi
            }
        }
 
//== Ayam Inventory

const addAyam = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].ayam += amount
                fs.writeFileSync('./database/user/rpg/inventori.json', JSON.stringify(_RPG))
            }
        }
        
       const sellAyam = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].ayam -= amount
                fs.writeFileSync('./database/user/rpg/inventori.json', JSON.stringify(_RPG))
            }
        } 
               
       const getAyam = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].ayam
            }
        }

// Sapi
const addSapi = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].sapi += amount
                fs.writeFileSync('./database/user/rpg/inventori.json', JSON.stringify(_RPG))
            }
        }
        
       const sellSapi = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].sapi -= amount
                fs.writeFileSync('./database/user/rpg/inventori.json', JSON.stringify(_RPG))
            }
        } 
               
       const getSapi = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].sapi
            }
        }

// == Burung Inventory
const addBurung = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].burung += amount
                fs.writeFileSync('./database/user/rpg/inventori.json', JSON.stringify(_RPG))
            }
        }
        
       const sellBurung = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].burung -= amount
                fs.writeFileSync('./database/user/rpg/inventori.json', JSON.stringify(_RPG))
            }
        } 
               
       const getBurung = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].burung
            }
        }

//== Fish Inventory

       const addFish = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].ikan += amount
                fs.writeFileSync('./database/user/rpg/inventori.json', JSON.stringify(_RPG))
            }
        }
        
       const sellFish = (sender, amount) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _RPG[position].ikan -= amount
                fs.writeFileSync('./database/user/rpg/inventori.json', JSON.stringify(_RPG))
            }
        } 
               
       const getFish = (sender) => {
            let position = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _RPG[position].ikan
            }
        }
                       
/**
 * Add User Initial Inventory
 * @made by Febriansyah
 * @don't lose maker's name
 */
        const addInventori = (sender) => {
            const obj = {id: sender, emas: 0, diamond: 0, besi: 0, ikan: 0, ayam: 0, sapi: 0, burung: 0}
            _RPG.push(obj)
            fs.writeFileSync('./database/user/rpg/inventori.json', JSON.stringify(_RPG))
        }
        
/**
 * Check Adventure User
 * @made by Febriansyah
 * @don't lose maker's name
 */
        const checkPetualangUser = (sender) => {
            let status = false
            Object.keys(_RPG).forEach((i) => {
                if (_RPG[i].id === sender) {
                    status = true
                }
            })
            return status
        }
        
        
module.exports = { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas , addFish, sellFish, getFish, addAyam, sellAyam, getAyam, addSapi, sellSapi, getSapi, addBurung, sellBurung, getBurung }