// ========================================
// GARBAGE COLLECTION EXAMPLES
// ========================================

console.log("=== GARBAGE COLLECTION DEMONSTRATION ===\n");

// ========================================
// 1. BASIC REFERENCE EXAMPLE
// ========================================
console.log("1. Basic Reference Example:");

let person = { name: "Alice", age: 30 };
let reference = person; // Tạo thêm một tham chiếu

console.log("Person object created:", person);
console.log("Reference count: 2 (person + reference)");

person = null; // Xóa tham chiếu đầu tiên
console.log("After person = null, reference count: 1");

reference = null; // Xóa tham chiếu cuối cùng
console.log("After reference = null, object is eligible for GC\n");

// ========================================
// 2. CIRCULAR REFERENCE EXAMPLE
// ========================================
console.log("2. Circular Reference Example:");

function createCircularReference() {
    const obj1 = { name: "Object 1" };
    const obj2 = { name: "Object 2" };
    
    obj1.ref = obj2; // obj1 tham chiếu đến obj2
    obj2.ref = obj1; // obj2 tham chiếu đến obj1
    
    console.log("Circular reference created:");
    console.log("obj1.ref === obj2:", obj1.ref === obj2);
    console.log("obj2.ref === obj1:", obj2.ref === obj1);
    
    return obj1;
}

const circular = createCircularReference();
console.log("Circular objects created and returned");

// Với Mark and Sweep algorithm hiện đại, 
// circular references sẽ được GC thu hồi khi không thể truy cập từ global scope
console.log("Note: Modern GC can handle circular references\n");

// ========================================
// 3. MEMORY LEAK EXAMPLES
// ========================================
console.log("3. Memory Leak Examples:");

// Memory Leak 1: Global Variables
function demonstrateGlobalLeak() {
    // Thiếu var/let/const tạo ra global variable
    globalLeakVar = "This becomes a global variable";
    console.log("Global variable created (memory leak)");
}

demonstrateGlobalLeak();
console.log("globalLeakVar in global scope:", typeof globalLeakVar !== 'undefined');

// Memory Leak 2: Event Listeners
function demonstrateEventListenerLeak() {
    // Giả lập DOM element
    const mockButton = {
        listeners: [],
        addEventListener: function(event, handler) {
            this.listeners.push({ event, handler });
            console.log("Event listener added");
        },
        removeEventListener: function(event, handler) {
            this.listeners = this.listeners.filter(l => 
                !(l.event === event && l.handler === handler)
            );
            console.log("Event listener removed");
        }
    };
    
    // Thêm listener
    mockButton.addEventListener('click', function() {
        console.log('Button clicked');
    });
    
    console.log("Event listener added (potential memory leak if not removed)");
    return mockButton;
}

const button = demonstrateEventListenerLeak();

// Memory Leak 3: Closures
function demonstrateClosureLeak() {
    const largeData = new Array(1000).fill('data');
    console.log("Large data array created with 1000 elements");
    
    return function() {
        console.log("Closure executed, largeData still in memory");
        // largeData vẫn được giữ trong memory
    };
}

const closure = demonstrateClosureLeak();
console.log("Closure created, largeData is retained\n");

// ========================================
// 4. WEAK REFERENCES EXAMPLE
// ========================================
console.log("4. Weak References Example:");

// WeakMap example
const weakMap = new WeakMap();
const key1 = { id: 1 };
const key2 = { id: 2 };

weakMap.set(key1, "Data for key1");
weakMap.set(key2, "Data for key2");

console.log("WeakMap created with 2 entries");
console.log("weakMap.has(key1):", weakMap.has(key1));
console.log("weakMap.has(key2):", weakMap.has(key2));

key1 = null; // Xóa tham chiếu đến key1
console.log("key1 set to null");
console.log("Note: WeakMap entry for key1 will be eligible for GC\n");

// ========================================
// 5. OBJECT POOL EXAMPLE
// ========================================
console.log("5. Object Pool Example:");

class ObjectPool {
    constructor() {
        this.pool = [];
        this.activeCount = 0;
    }
    
    get() {
        if (this.pool.length > 0) {
            const obj = this.pool.pop();
            console.log("Reused object from pool");
            this.activeCount++;
            return obj;
        } else {
            const obj = { id: Date.now(), data: null };
            console.log("Created new object");
            this.activeCount++;
            return obj;
        }
    }
    
    release(obj) {
        obj.data = null; // Reset object state
        this.pool.push(obj);
        this.activeCount--;
        console.log("Object returned to pool");
    }
    
    getStats() {
        return {
            poolSize: this.pool.length,
            activeCount: this.activeCount
        };
    }
}

const pool = new ObjectPool();

// Sử dụng object pool
const obj1 = pool.get();
const obj2 = pool.get();
const obj3 = pool.get();

console.log("Pool stats after getting 3 objects:", pool.getStats());

pool.release(obj1);
pool.release(obj2);

console.log("Pool stats after releasing 2 objects:", pool.getStats());

// Lấy lại object từ pool
const obj4 = pool.get(); // Sẽ reuse object từ pool
console.log("Pool stats after getting 1 more object:", pool.getStats());
console.log("");

// ========================================
// 6. PERFORMANCE MONITORING
// ========================================
console.log("6. Performance Monitoring:");

// Kiểm tra memory usage (nếu có)
if (typeof performance !== 'undefined' && performance.memory) {
    console.log("Memory usage:", {
        usedJSHeapSize: performance.memory.usedJSHeapSize,
        totalJSHeapSize: performance.memory.totalJSHeapSize,
        jsHeapSizeLimit: performance.memory.jsHeapSizeLimit
    });
} else {
    console.log("Performance.memory not available in this environment");
}

// Memory usage simulation
let memoryUsage = {
    used: 0,
    total: 0
};

function simulateMemoryUsage(bytes) {
    memoryUsage.used += bytes;
    memoryUsage.total = Math.max(memoryUsage.total, memoryUsage.used);
    console.log(`Memory used: ${memoryUsage.used} bytes, Total: ${memoryUsage.total} bytes`);
}

// Simulate memory allocation
simulateMemoryUsage(1024); // 1KB
simulateMemoryUsage(2048); // 2KB
simulateMemoryUsage(1024); // 1KB more

console.log("");

// ========================================
// 7. BEST PRACTICES DEMONSTRATION
// ========================================
console.log("7. Best Practices Demonstration:");

// Good practice: Local variables
function goodPractice() {
    const localVar = "I'm local";
    console.log("Local variable created");
    // localVar sẽ được GC khi function kết thúc
}

// Good practice: Proper cleanup
function properCleanup() {
    const resources = [];
    
    // Add some resources
    resources.push({ id: 1, data: "resource1" });
    resources.push({ id: 2, data: "resource2" });
    
    console.log("Resources created:", resources.length);
    
    // Cleanup
    resources.length = 0; // Clear array
    console.log("Resources cleaned up");
}

// Good practice: Avoid creating objects in loops
function efficientLoop() {
    const results = [];
    const template = { id: 0, processed: false }; // Reuse object
    
    for (let i = 0; i < 5; i++) {
        const item = Object.assign({}, template, { id: i });
        results.push(item);
    }
    
    console.log("Efficient loop completed, created", results.length, "objects");
}

goodPractice();
properCleanup();
efficientLoop();

console.log("\n=== DEMONSTRATION COMPLETE ===");
console.log("Check browser DevTools Memory tab to see GC in action!"); 