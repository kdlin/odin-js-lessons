/* JavaScript (Odin-track) reference glossary — terms from the Object
   Constructors & Prototypes lessons, with Java analogs throughout.
   Shown in the floating bar's "Reference" button (searchable).
   Load BEFORE toolbar.js. */

window.GM_GLOSSARY = {
  title: "JavaScript Reference",
  groups: [
    { title: "Objects & Constructors", entries: [
      { term: "object literal", aka: "{ }", def: "An object declared inline as a bag of key/value pairs. No class needed. Closest Java analog: an anonymous singleton crossed with a Map<String,Object>." },
      { term: "constructor function", aka: "function Dog() {}", def: "A plain function used with `new` to stamp out instances. Capitalized by convention only. JS's version of a Java constructor, minus the class around it." },
      { term: "new", aka: "", def: "Does 4 things: creates an empty object, links its [[Prototype]] to Fn.prototype, runs the function with `this` = the new object, returns it." },
      { term: "new.target", aka: "constructor guard", def: "Meta-property: equals the constructor when called with `new`, undefined on a plain call. `if (!new.target) throw` prevents forgotten-new bugs. Java makes this mistake impossible; JS needs the guard." },
      { term: "instance", aka: "", def: "The object a constructor produces. Holds its OWN data properties (name, pages...). Never holds shared methods — those live on the prototype." },
      { term: "method", aka: "", def: "A property whose value is a function. Called via obj.method(). Nothing more special than that — functions are values in JS." },
      { term: "property access", aka: "dot / bracket", def: "obj.key or obj[\"key\"]. Bracket form takes variables and weird keys (spaces). Reading a missing property returns undefined — no compile error like Java." }
    ]},
    { title: "Prototypes", entries: [
      { term: "Fn.prototype", aka: "the card on the factory wall", def: "A data property on every FUNCTION: the object that future instances made with `new` will delegate to. Exists from function definition, before any instance. No Java equivalent — Java hides its method tables." },
      { term: "[[Prototype]]", aka: "the stamp", def: "The hidden internal link every OBJECT has, pointing to the object it delegates to. Read with Object.getPrototypeOf(obj). Java analog: the hidden class-pointer in every object header." },
      { term: "Object.getPrototypeOf()", aka: "", def: "Reads an object's [[Prototype]] (its live delegation link). NOT the same as Fn.prototype — that's the template for future instances." },
      { term: "Object.setPrototypeOf(A, B)", aka: "", def: "Rewires A's delegation link to B at runtime. Used as setPrototypeOf(Child.prototype, Parent.prototype) to chain 'classes'. Do it BEFORE creating instances (perf)." },
      { term: "prototype chain", aka: "delegation chain", def: "instance -> Fn.prototype -> Object.prototype -> null. Property lookup walks it fresh on every access; first hit wins; falls off the end as undefined." },
      { term: "prototypal inheritance", aka: "delegation", def: "Objects inherit by LINKING to live objects, not by copying members down. Java resolves extends at compile time; JS walks the chain at runtime, every call." },
      { term: "mutation vs reassignment", aka: "THE trap", def: "Fn.prototype.m = ... (mutate: write ON the shared card) reaches ALL instances, past + future. Fn.prototype = {...} (replace the card) affects FUTURE instances only — old ones keep the original object. Same semantics as Java's list.add(x) vs list = new ArrayList()." },
      { term: "shadowing", aka: "", def: "An own property with the same name as a prototype property wins lookup for that one object. Like Java field hiding, but per-object and at runtime." },
      { term: "Object.prototype", aka: "", def: "End of (nearly) every chain — JS's java.lang.Object. Supplies toString, valueOf, hasOwnProperty. No equals/hashCode: JS has no overridable equality protocol." },
      { term: "hasOwnProperty()", aka: "", def: "\"Is this property in MY notebook, or found up the chain?\" Only meaningful in a language with visible prototype chains — Java can't even ask this." },
      { term: "__proto__", aka: "deprecated", def: "Legacy accessor for [[Prototype]]. You'll see it in old docs and javascript.info. Use Object.getPrototypeOf/setPrototypeOf instead." }
    ]},
    { title: "this & Functions", entries: [
      { term: "this", aka: "the borrowed hat", def: "Resolved fresh at EVERY call: whatever object the function was called through (left of the dot). Java's this is fixed to the enclosing instance forever; JS's is re-decided per call site." },
      { term: "this — 5 rules", aka: "", def: "obj.m() -> obj · plain f() -> undefined/global · new Fn() -> the new object · call/apply/bind -> what you pass · arrow -> inherits from where it was WRITTEN. Priority: new > bind > dot > plain." },
      { term: "detached method", aka: "", def: "const f = obj.m; f() rips the method off the object — `this` is lost (setTimeout(obj.m, 1000) is the classic). Impossible by design in Java, routine bug in JS." },
      { term: "arrow function", aka: "=>", def: "Has NO own `this`; it keeps the `this` of the scope where it was written. Never use arrows as object-literal or prototype methods." },
      { term: "functions are objects", aka: "", def: "Every function is a callable object and can carry properties (Dog.prototype, Dog.legs). Objects are NOT functions — the relationship is one-way, like Function extends Object." },
      { term: "class (keyword)", aka: "syntactic sugar", def: "class Dog { bark() {} } builds the same constructor-function + prototype machinery with guardrails (new required). Java's class is fundamental; JS's is a costume over functions and prototypes." }
    ]},
    { title: "Java -> JS Quick Map", entries: [
      { term: "java.lang.Object", aka: "", def: "≈ Object.prototype (chain end, default toString/valueOf). Static-feeling utilities live on the Object function itself: Object.keys(), Object.assign()." },
      { term: "private", aka: "", def: "Doesn't exist for constructors/literals. _underscore is convention only. Real privacy arrives later (closures, #fields)." },
      { term: "overloading", aka: "", def: "Doesn't exist. Same-name method: last definition silently wins. Any function accepts any number of args (extras dropped, missing = undefined)." },
      { term: "final reference", aka: "const", def: "const obj = {...} is Java's final: the BINDING can't be reassigned, but the object stays fully mutable." },
      { term: "instanceof", aka: "", def: "x instanceof Fn asks: is Fn.prototype anywhere in x's chain? Dynamic — rewiring the chain changes the answer at runtime, unlike Java's." }
    ]}
  ]
};
