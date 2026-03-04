//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") {
		for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) {
				__defProp(to, key, {
					get: ((k) => from[k]).bind(null, key),
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
			}
		}
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
//#region node_modules/prismjs/prism.js
var require_prism = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Prism: Lightweight, robust, elegant syntax highlighting
	*
	* @license MIT <https://opensource.org/licenses/MIT>
	* @author Lea Verou <https://lea.verou.me>
	* @namespace
	* @public
	*/
	var Prism = function(_self) {
		var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
		var uniqueId = 0;
		var plainTextGrammar = {};
		var _ = {
			manual: _self.Prism && _self.Prism.manual,
			disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
			util: {
				encode: function encode(tokens) {
					if (tokens instanceof Token) return new Token(tokens.type, encode(tokens.content), tokens.alias);
					else if (Array.isArray(tokens)) return tokens.map(encode);
					else return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
				},
				type: function(o) {
					return Object.prototype.toString.call(o).slice(8, -1);
				},
				objId: function(obj) {
					if (!obj["__id"]) Object.defineProperty(obj, "__id", { value: ++uniqueId });
					return obj["__id"];
				},
				clone: function deepClone(o, visited) {
					visited = visited || {};
					var clone;
					var id;
					switch (_.util.type(o)) {
						case "Object":
							id = _.util.objId(o);
							if (visited[id]) return visited[id];
							clone = {};
							visited[id] = clone;
							for (var key in o) if (o.hasOwnProperty(key)) clone[key] = deepClone(o[key], visited);
							return clone;
						case "Array":
							id = _.util.objId(o);
							if (visited[id]) return visited[id];
							clone = [];
							visited[id] = clone;
							o.forEach(function(v, i) {
								clone[i] = deepClone(v, visited);
							});
							return clone;
						default: return o;
					}
				},
				getLanguage: function(element) {
					while (element) {
						var m = lang.exec(element.className);
						if (m) return m[1].toLowerCase();
						element = element.parentElement;
					}
					return "none";
				},
				setLanguage: function(element, language) {
					element.className = element.className.replace(RegExp(lang, "gi"), "");
					element.classList.add("language-" + language);
				},
				currentScript: function() {
					if (typeof document === "undefined") return null;
					if (document.currentScript && document.currentScript.tagName === "SCRIPT" && true) return document.currentScript;
					try {
						throw new Error();
					} catch (err) {
						var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
						if (src) {
							var scripts = document.getElementsByTagName("script");
							for (var i in scripts) if (scripts[i].src == src) return scripts[i];
						}
						return null;
					}
				},
				isActive: function(element, className, defaultActivation) {
					var no = "no-" + className;
					while (element) {
						var classList = element.classList;
						if (classList.contains(className)) return true;
						if (classList.contains(no)) return false;
						element = element.parentElement;
					}
					return !!defaultActivation;
				}
			},
			languages: {
				plain: plainTextGrammar,
				plaintext: plainTextGrammar,
				text: plainTextGrammar,
				txt: plainTextGrammar,
				extend: function(id, redef) {
					var lang = _.util.clone(_.languages[id]);
					for (var key in redef) lang[key] = redef[key];
					return lang;
				},
				insertBefore: function(inside, before, insert, root) {
					root = root || _.languages;
					var grammar = root[inside];
					/** @type {Grammar} */
					var ret = {};
					for (var token in grammar) if (grammar.hasOwnProperty(token)) {
						if (token == before) {
							for (var newToken in insert) if (insert.hasOwnProperty(newToken)) ret[newToken] = insert[newToken];
						}
						if (!insert.hasOwnProperty(token)) ret[token] = grammar[token];
					}
					var old = root[inside];
					root[inside] = ret;
					_.languages.DFS(_.languages, function(key, value) {
						if (value === old && key != inside) this[key] = ret;
					});
					return ret;
				},
				DFS: function DFS(o, callback, type, visited) {
					visited = visited || {};
					var objId = _.util.objId;
					for (var i in o) if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);
						var property = o[i];
						var propertyType = _.util.type(property);
						if (propertyType === "Object" && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, null, visited);
						} else if (propertyType === "Array" && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, i, visited);
						}
					}
				}
			},
			plugins: {},
			highlightAll: function(async, callback) {
				_.highlightAllUnder(document, async, callback);
			},
			highlightAllUnder: function(container, async, callback) {
				var env = {
					callback,
					container,
					selector: "code[class*=\"language-\"], [class*=\"language-\"] code, code[class*=\"lang-\"], [class*=\"lang-\"] code"
				};
				_.hooks.run("before-highlightall", env);
				env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
				_.hooks.run("before-all-elements-highlight", env);
				for (var i = 0, element; element = env.elements[i++];) _.highlightElement(element, async === true, env.callback);
			},
			highlightElement: function(element, async, callback) {
				var language = _.util.getLanguage(element);
				var grammar = _.languages[language];
				_.util.setLanguage(element, language);
				var parent = element.parentElement;
				if (parent && parent.nodeName.toLowerCase() === "pre") _.util.setLanguage(parent, language);
				var env = {
					element,
					language,
					grammar,
					code: element.textContent
				};
				function insertHighlightedCode(highlightedCode) {
					env.highlightedCode = highlightedCode;
					_.hooks.run("before-insert", env);
					env.element.innerHTML = env.highlightedCode;
					_.hooks.run("after-highlight", env);
					_.hooks.run("complete", env);
					callback && callback.call(env.element);
				}
				_.hooks.run("before-sanity-check", env);
				parent = env.element.parentElement;
				if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) parent.setAttribute("tabindex", "0");
				if (!env.code) {
					_.hooks.run("complete", env);
					callback && callback.call(env.element);
					return;
				}
				_.hooks.run("before-highlight", env);
				if (!env.grammar) {
					insertHighlightedCode(_.util.encode(env.code));
					return;
				}
				if (async && _self.Worker) {
					var worker = new Worker(_.filename);
					worker.onmessage = function(evt) {
						insertHighlightedCode(evt.data);
					};
					worker.postMessage(JSON.stringify({
						language: env.language,
						code: env.code,
						immediateClose: true
					}));
				} else insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
			},
			highlight: function(text, grammar, language) {
				var env = {
					code: text,
					grammar,
					language
				};
				_.hooks.run("before-tokenize", env);
				if (!env.grammar) throw new Error("The language \"" + env.language + "\" has no grammar.");
				env.tokens = _.tokenize(env.code, env.grammar);
				_.hooks.run("after-tokenize", env);
				return Token.stringify(_.util.encode(env.tokens), env.language);
			},
			tokenize: function(text, grammar) {
				var rest = grammar.rest;
				if (rest) {
					for (var token in rest) grammar[token] = rest[token];
					delete grammar.rest;
				}
				var tokenList = new LinkedList();
				addAfter(tokenList, tokenList.head, text);
				matchGrammar(text, tokenList, grammar, tokenList.head, 0);
				return toArray(tokenList);
			},
			hooks: {
				all: {},
				add: function(name, callback) {
					var hooks = _.hooks.all;
					hooks[name] = hooks[name] || [];
					hooks[name].push(callback);
				},
				run: function(name, env) {
					var callbacks = _.hooks.all[name];
					if (!callbacks || !callbacks.length) return;
					for (var i = 0, callback; callback = callbacks[i++];) callback(env);
				}
			},
			Token
		};
		_self.Prism = _;
		/**
		* Creates a new token.
		*
		* @param {string} type See {@link Token#type type}
		* @param {string | TokenStream} content See {@link Token#content content}
		* @param {string|string[]} [alias] The alias(es) of the token.
		* @param {string} [matchedStr=""] A copy of the full string this token was created from.
		* @class
		* @global
		* @public
		*/
		function Token(type, content, alias, matchedStr) {
			/**
			* The type of the token.
			*
			* This is usually the key of a pattern in a {@link Grammar}.
			*
			* @type {string}
			* @see GrammarToken
			* @public
			*/
			this.type = type;
			/**
			* The strings or tokens contained by this token.
			*
			* This will be a token stream if the pattern matched also defined an `inside` grammar.
			*
			* @type {string | TokenStream}
			* @public
			*/
			this.content = content;
			/**
			* The alias(es) of the token.
			*
			* @type {string|string[]}
			* @see GrammarToken
			* @public
			*/
			this.alias = alias;
			this.length = (matchedStr || "").length | 0;
		}
		/**
		* A token stream is an array of strings and {@link Token Token} objects.
		*
		* Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
		* them.
		*
		* 1. No adjacent strings.
		* 2. No empty strings.
		*
		*    The only exception here is the token stream that only contains the empty string and nothing else.
		*
		* @typedef {Array<string | Token>} TokenStream
		* @global
		* @public
		*/
		/**
		* Converts the given token or token stream to an HTML representation.
		*
		* The following hooks will be run:
		* 1. `wrap`: On each {@link Token}.
		*
		* @param {string | Token | TokenStream} o The token or token stream to be converted.
		* @param {string} language The name of current language.
		* @returns {string} The HTML representation of the token or token stream.
		* @memberof Token
		* @static
		*/
		Token.stringify = function stringify(o, language) {
			if (typeof o == "string") return o;
			if (Array.isArray(o)) {
				var s = "";
				o.forEach(function(e) {
					s += stringify(e, language);
				});
				return s;
			}
			var env = {
				type: o.type,
				content: stringify(o.content, language),
				tag: "span",
				classes: ["token", o.type],
				attributes: {},
				language
			};
			var aliases = o.alias;
			if (aliases) if (Array.isArray(aliases)) Array.prototype.push.apply(env.classes, aliases);
			else env.classes.push(aliases);
			_.hooks.run("wrap", env);
			var attributes = "";
			for (var name in env.attributes) attributes += " " + name + "=\"" + (env.attributes[name] || "").replace(/"/g, "&quot;") + "\"";
			return "<" + env.tag + " class=\"" + env.classes.join(" ") + "\"" + attributes + ">" + env.content + "</" + env.tag + ">";
		};
		/**
		* @param {RegExp} pattern
		* @param {number} pos
		* @param {string} text
		* @param {boolean} lookbehind
		* @returns {RegExpExecArray | null}
		*/
		function matchPattern(pattern, pos, text, lookbehind) {
			pattern.lastIndex = pos;
			var match = pattern.exec(text);
			if (match && lookbehind && match[1]) {
				var lookbehindLength = match[1].length;
				match.index += lookbehindLength;
				match[0] = match[0].slice(lookbehindLength);
			}
			return match;
		}
		/**
		* @param {string} text
		* @param {LinkedList<string | Token>} tokenList
		* @param {any} grammar
		* @param {LinkedListNode<string | Token>} startNode
		* @param {number} startPos
		* @param {RematchOptions} [rematch]
		* @returns {void}
		* @private
		*
		* @typedef RematchOptions
		* @property {string} cause
		* @property {number} reach
		*/
		function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
			for (var token in grammar) {
				if (!grammar.hasOwnProperty(token) || !grammar[token]) continue;
				var patterns = grammar[token];
				patterns = Array.isArray(patterns) ? patterns : [patterns];
				for (var j = 0; j < patterns.length; ++j) {
					if (rematch && rematch.cause == token + "," + j) return;
					var patternObj = patterns[j];
					var inside = patternObj.inside;
					var lookbehind = !!patternObj.lookbehind;
					var greedy = !!patternObj.greedy;
					var alias = patternObj.alias;
					if (greedy && !patternObj.pattern.global) {
						var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
						patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
					}
					/** @type {RegExp} */
					var pattern = patternObj.pattern || patternObj;
					for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
						if (rematch && pos >= rematch.reach) break;
						var str = currentNode.value;
						if (tokenList.length > text.length) return;
						if (str instanceof Token) continue;
						var removeCount = 1;
						var match;
						if (greedy) {
							match = matchPattern(pattern, pos, text, lookbehind);
							if (!match || match.index >= text.length) break;
							var from = match.index;
							var to = match.index + match[0].length;
							var p = pos;
							p += currentNode.value.length;
							while (from >= p) {
								currentNode = currentNode.next;
								p += currentNode.value.length;
							}
							p -= currentNode.value.length;
							pos = p;
							if (currentNode.value instanceof Token) continue;
							for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
								removeCount++;
								p += k.value.length;
							}
							removeCount--;
							str = text.slice(pos, p);
							match.index -= pos;
						} else {
							match = matchPattern(pattern, 0, str, lookbehind);
							if (!match) continue;
						}
						var from = match.index;
						var matchStr = match[0];
						var before = str.slice(0, from);
						var after = str.slice(from + matchStr.length);
						var reach = pos + str.length;
						if (rematch && reach > rematch.reach) rematch.reach = reach;
						var removeFrom = currentNode.prev;
						if (before) {
							removeFrom = addAfter(tokenList, removeFrom, before);
							pos += before.length;
						}
						removeRange(tokenList, removeFrom, removeCount);
						var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
						currentNode = addAfter(tokenList, removeFrom, wrapped);
						if (after) addAfter(tokenList, currentNode, after);
						if (removeCount > 1) {
							/** @type {RematchOptions} */
							var nestedRematch = {
								cause: token + "," + j,
								reach
							};
							matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
							if (rematch && nestedRematch.reach > rematch.reach) rematch.reach = nestedRematch.reach;
						}
					}
				}
			}
		}
		/**
		* @typedef LinkedListNode
		* @property {T} value
		* @property {LinkedListNode<T> | null} prev The previous node.
		* @property {LinkedListNode<T> | null} next The next node.
		* @template T
		* @private
		*/
		/**
		* @template T
		* @private
		*/
		function LinkedList() {
			/** @type {LinkedListNode<T>} */
			var head = {
				value: null,
				prev: null,
				next: null
			};
			/** @type {LinkedListNode<T>} */
			var tail = {
				value: null,
				prev: head,
				next: null
			};
			head.next = tail;
			/** @type {LinkedListNode<T>} */
			this.head = head;
			/** @type {LinkedListNode<T>} */
			this.tail = tail;
			this.length = 0;
		}
		/**
		* Adds a new node with the given value to the list.
		*
		* @param {LinkedList<T>} list
		* @param {LinkedListNode<T>} node
		* @param {T} value
		* @returns {LinkedListNode<T>} The added node.
		* @template T
		*/
		function addAfter(list, node, value) {
			var next = node.next;
			var newNode = {
				value,
				prev: node,
				next
			};
			node.next = newNode;
			next.prev = newNode;
			list.length++;
			return newNode;
		}
		/**
		* Removes `count` nodes after the given node. The given node will not be removed.
		*
		* @param {LinkedList<T>} list
		* @param {LinkedListNode<T>} node
		* @param {number} count
		* @template T
		*/
		function removeRange(list, node, count) {
			var next = node.next;
			for (var i = 0; i < count && next !== list.tail; i++) next = next.next;
			node.next = next;
			next.prev = node;
			list.length -= i;
		}
		/**
		* @param {LinkedList<T>} list
		* @returns {T[]}
		* @template T
		*/
		function toArray(list) {
			var array = [];
			var node = list.head.next;
			while (node !== list.tail) {
				array.push(node.value);
				node = node.next;
			}
			return array;
		}
		if (!_self.document) {
			if (!_self.addEventListener) return _;
			if (!_.disableWorkerMessageHandler) _self.addEventListener("message", function(evt) {
				var message = JSON.parse(evt.data);
				var lang = message.language;
				var code = message.code;
				var immediateClose = message.immediateClose;
				_self.postMessage(_.highlight(code, _.languages[lang], lang));
				if (immediateClose) _self.close();
			}, false);
			return _;
		}
		var script = _.util.currentScript();
		if (script) {
			_.filename = script.src;
			if (script.hasAttribute("data-manual")) _.manual = true;
		}
		function highlightAutomaticallyCallback() {
			if (!_.manual) _.highlightAll();
		}
		if (!_.manual) {
			var readyState = document.readyState;
			if (readyState === "loading" || readyState === "interactive" && script && script.defer) document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
			else if (window.requestAnimationFrame) window.requestAnimationFrame(highlightAutomaticallyCallback);
			else window.setTimeout(highlightAutomaticallyCallback, 16);
		}
		return _;
	}(typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {});
	if (typeof module !== "undefined" && module.exports) module.exports = Prism;
	if (typeof global !== "undefined") global.Prism = Prism;
	/**
	* The expansion of a simple `RegExp` literal to support additional properties.
	*
	* @typedef GrammarToken
	* @property {RegExp} pattern The regular expression of the token.
	* @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
	* behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
	* @property {boolean} [greedy=false] Whether the token is greedy.
	* @property {string|string[]} [alias] An optional alias or list of aliases.
	* @property {Grammar} [inside] The nested grammar of this token.
	*
	* The `inside` grammar will be used to tokenize the text value of each token of this kind.
	*
	* This can be used to make nested and even recursive language definitions.
	*
	* Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
	* each another.
	* @global
	* @public
	*/
	/**
	* @typedef Grammar
	* @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
	* @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
	* @global
	* @public
	*/
	/**
	* A function which will invoked after an element was successfully highlighted.
	*
	* @callback HighlightCallback
	* @param {Element} element The element successfully highlighted.
	* @returns {void}
	* @global
	* @public
	*/
	/**
	* @callback HookCallback
	* @param {Object<string, any>} env The environment variables of the hook.
	* @returns {void}
	* @global
	* @public
	*/
	Prism.languages.markup = {
		"comment": {
			pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
			greedy: true
		},
		"prolog": {
			pattern: /<\?[\s\S]+?\?>/,
			greedy: true
		},
		"doctype": {
			pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
			greedy: true,
			inside: {
				"internal-subset": {
					pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
					lookbehind: true,
					greedy: true,
					inside: null
				},
				"string": {
					pattern: /"[^"]*"|'[^']*'/,
					greedy: true
				},
				"punctuation": /^<!|>$|[[\]]/,
				"doctype-tag": /^DOCTYPE/i,
				"name": /[^\s<>'"]+/
			}
		},
		"cdata": {
			pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
			greedy: true
		},
		"tag": {
			pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
			greedy: true,
			inside: {
				"tag": {
					pattern: /^<\/?[^\s>\/]+/,
					inside: {
						"punctuation": /^<\/?/,
						"namespace": /^[^\s>\/:]+:/
					}
				},
				"special-attr": [],
				"attr-value": {
					pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
					inside: { "punctuation": [{
						pattern: /^=/,
						alias: "attr-equals"
					}, {
						pattern: /^(\s*)["']|["']$/,
						lookbehind: true
					}] }
				},
				"punctuation": /\/?>/,
				"attr-name": {
					pattern: /[^\s>\/]+/,
					inside: { "namespace": /^[^\s>\/:]+:/ }
				}
			}
		},
		"entity": [{
			pattern: /&[\da-z]{1,8};/i,
			alias: "named-entity"
		}, /&#x?[\da-f]{1,8};/i]
	};
	Prism.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism.languages.markup["entity"];
	Prism.languages.markup["doctype"].inside["internal-subset"].inside = Prism.languages.markup;
	Prism.hooks.add("wrap", function(env) {
		if (env.type === "entity") env.attributes["title"] = env.content.replace(/&amp;/, "&");
	});
	Object.defineProperty(Prism.languages.markup.tag, "addInlined", { value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside["language-" + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
		var inside = { "included-cdata": {
			pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
			inside: includedCdataInside
		} };
		inside["language-" + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};
		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
				return tagName;
			}), "i"),
			lookbehind: true,
			greedy: true,
			inside
		};
		Prism.languages.insertBefore("markup", "cdata", def);
	} });
	Object.defineProperty(Prism.languages.markup.tag, "addAttribute", { value: function(attrName, lang) {
		Prism.languages.markup.tag.inside["special-attr"].push({
			pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
			lookbehind: true,
			inside: {
				"attr-name": /^[^\s=]+/,
				"attr-value": {
					pattern: /=[\s\S]+/,
					inside: {
						"value": {
							pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
							lookbehind: true,
							alias: [lang, "language-" + lang],
							inside: Prism.languages[lang]
						},
						"punctuation": [{
							pattern: /^=/,
							alias: "attr-equals"
						}, /"|'/]
					}
				}
			}
		});
	} });
	Prism.languages.html = Prism.languages.markup;
	Prism.languages.mathml = Prism.languages.markup;
	Prism.languages.svg = Prism.languages.markup;
	Prism.languages.xml = Prism.languages.extend("markup", {});
	Prism.languages.ssml = Prism.languages.xml;
	Prism.languages.atom = Prism.languages.xml;
	Prism.languages.rss = Prism.languages.xml;
	(function(Prism) {
		var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
		Prism.languages.css = {
			"comment": /\/\*[\s\S]*?\*\//,
			"atrule": {
				pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + string.source + ")*?" + /(?:;|(?=\s*\{))/.source),
				inside: {
					"rule": /^@[\w-]+/,
					"selector-function-argument": {
						pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
						lookbehind: true,
						alias: "selector"
					},
					"keyword": {
						pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
						lookbehind: true
					}
				}
			},
			"url": {
				pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
				greedy: true,
				inside: {
					"function": /^url/i,
					"punctuation": /^\(|\)$/,
					"string": {
						pattern: RegExp("^" + string.source + "$"),
						alias: "url"
					}
				}
			},
			"selector": {
				pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + string.source + ")*(?=\\s*\\{)"),
				lookbehind: true
			},
			"string": {
				pattern: string,
				greedy: true
			},
			"property": {
				pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
				lookbehind: true
			},
			"important": /!important\b/i,
			"function": {
				pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
				lookbehind: true
			},
			"punctuation": /[(){};:,]/
		};
		Prism.languages.css["atrule"].inside.rest = Prism.languages.css;
		var markup = Prism.languages.markup;
		if (markup) {
			markup.tag.addInlined("style", "css");
			markup.tag.addAttribute("style", "css");
		}
	})(Prism);
	Prism.languages.clike = {
		"comment": [{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true,
			greedy: true
		}, {
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}],
		"string": {
			pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
			greedy: true
		},
		"class-name": {
			pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
			lookbehind: true,
			inside: { "punctuation": /[.\\]/ }
		},
		"keyword": /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
		"boolean": /\b(?:false|true)\b/,
		"function": /\b\w+(?=\()/,
		"number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
		"operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
		"punctuation": /[{}[\];(),.:]/
	};
	Prism.languages.javascript = Prism.languages.extend("clike", {
		"class-name": [Prism.languages.clike["class-name"], {
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
			lookbehind: true
		}],
		"keyword": [{
			pattern: /((?:^|\})\s*)catch\b/,
			lookbehind: true
		}, {
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		}],
		"function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
		"number": {
			pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
			lookbehind: true
		},
		"operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
	});
	Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
	Prism.languages.insertBefore("javascript", "keyword", {
		"regex": {
			pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
			lookbehind: true,
			greedy: true,
			inside: {
				"regex-source": {
					pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
					lookbehind: true,
					alias: "language-regex",
					inside: Prism.languages.regex
				},
				"regex-delimiter": /^\/|\/$/,
				"regex-flags": /^[a-z]+$/
			}
		},
		"function-variable": {
			pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
			alias: "function"
		},
		"parameter": [
			{
				pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
				lookbehind: true,
				inside: Prism.languages.javascript
			},
			{
				pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
				lookbehind: true,
				inside: Prism.languages.javascript
			},
			{
				pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
				lookbehind: true,
				inside: Prism.languages.javascript
			},
			{
				pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
				lookbehind: true,
				inside: Prism.languages.javascript
			}
		],
		"constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
	});
	Prism.languages.insertBefore("javascript", "string", {
		"hashbang": {
			pattern: /^#!.*/,
			greedy: true,
			alias: "comment"
		},
		"template-string": {
			pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
			greedy: true,
			inside: {
				"template-punctuation": {
					pattern: /^`|`$/,
					alias: "string"
				},
				"interpolation": {
					pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
					lookbehind: true,
					inside: {
						"interpolation-punctuation": {
							pattern: /^\$\{|\}$/,
							alias: "punctuation"
						},
						rest: Prism.languages.javascript
					}
				},
				"string": /[\s\S]+/
			}
		},
		"string-property": {
			pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
			lookbehind: true,
			greedy: true,
			alias: "property"
		}
	});
	Prism.languages.insertBefore("javascript", "operator", { "literal-property": {
		pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
		lookbehind: true,
		alias: "property"
	} });
	if (Prism.languages.markup) {
		Prism.languages.markup.tag.addInlined("script", "javascript");
		Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
	}
	Prism.languages.js = Prism.languages.javascript;
	(function() {
		if (typeof Prism === "undefined" || typeof document === "undefined") return;
		if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
		var LOADING_MESSAGE = "Loading…";
		var FAILURE_MESSAGE = function(status, message) {
			return "✖ Error " + status + " while fetching file: " + message;
		};
		var FAILURE_EMPTY_MESSAGE = "✖ Error: File does not exist or is empty";
		var EXTENSIONS = {
			"js": "javascript",
			"py": "python",
			"rb": "ruby",
			"ps1": "powershell",
			"psm1": "powershell",
			"sh": "bash",
			"bat": "batch",
			"h": "c",
			"tex": "latex"
		};
		var STATUS_ATTR = "data-src-status";
		var STATUS_LOADING = "loading";
		var STATUS_LOADED = "loaded";
		var STATUS_FAILED = "failed";
		var SELECTOR = "pre[data-src]:not([" + STATUS_ATTR + "=\"" + STATUS_LOADED + "\"]):not([" + STATUS_ATTR + "=\"" + STATUS_LOADING + "\"])";
		/**
		* Loads the given file.
		*
		* @param {string} src The URL or path of the source file to load.
		* @param {(result: string) => void} success
		* @param {(reason: string) => void} error
		*/
		function loadFile(src, success, error) {
			var xhr = new XMLHttpRequest();
			xhr.open("GET", src, true);
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) if (xhr.status < 400 && xhr.responseText) success(xhr.responseText);
				else if (xhr.status >= 400) error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
				else error(FAILURE_EMPTY_MESSAGE);
			};
			xhr.send(null);
		}
		/**
		* Parses the given range.
		*
		* This returns a range with inclusive ends.
		*
		* @param {string | null | undefined} range
		* @returns {[number, number | undefined] | undefined}
		*/
		function parseRange(range) {
			var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || "");
			if (m) {
				var start = Number(m[1]);
				var comma = m[2];
				var end = m[3];
				if (!comma) return [start, start];
				if (!end) return [start, void 0];
				return [start, Number(end)];
			}
		}
		Prism.hooks.add("before-highlightall", function(env) {
			env.selector += ", " + SELECTOR;
		});
		Prism.hooks.add("before-sanity-check", function(env) {
			var pre = env.element;
			if (pre.matches(SELECTOR)) {
				env.code = "";
				pre.setAttribute(STATUS_ATTR, STATUS_LOADING);
				var code = pre.appendChild(document.createElement("CODE"));
				code.textContent = LOADING_MESSAGE;
				var src = pre.getAttribute("data-src");
				var language = env.language;
				if (language === "none") {
					var extension = (/\.(\w+)$/.exec(src) || [, "none"])[1];
					language = EXTENSIONS[extension] || extension;
				}
				Prism.util.setLanguage(code, language);
				Prism.util.setLanguage(pre, language);
				var autoloader = Prism.plugins.autoloader;
				if (autoloader) autoloader.loadLanguages(language);
				loadFile(src, function(text) {
					pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
					var range = parseRange(pre.getAttribute("data-range"));
					if (range) {
						var lines = text.split(/\r\n?|\n/g);
						var start = range[0];
						var end = range[1] == null ? lines.length : range[1];
						if (start < 0) start += lines.length;
						start = Math.max(0, Math.min(start - 1, lines.length));
						if (end < 0) end += lines.length;
						end = Math.max(0, Math.min(end, lines.length));
						text = lines.slice(start, end).join("\n");
						if (!pre.hasAttribute("data-start")) pre.setAttribute("data-start", String(start + 1));
					}
					code.textContent = text;
					Prism.highlightElement(code);
				}, function(error) {
					pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
					code.textContent = error;
				});
			}
		});
		Prism.plugins.fileHighlight = { highlight: function highlight(container) {
			var elements = (container || document).querySelectorAll(SELECTOR);
			for (var i = 0, element; element = elements[i++];) Prism.highlightElement(element);
		} };
		var logged = false;
		/** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */
		Prism.fileHighlight = function() {
			if (!logged) {
				console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.");
				logged = true;
			}
			Prism.plugins.fileHighlight.highlight.apply(this, arguments);
		};
	})();
}));

//#endregion
//#region node_modules/prismjs/components/prism-typescript.js
var import_prism = /* @__PURE__ */ __toESM(require_prism(), 1);
(function(Prism) {
	Prism.languages.typescript = Prism.languages.extend("javascript", {
		"class-name": {
			pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
			lookbehind: true,
			greedy: true,
			inside: null
		},
		"builtin": /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
	});
	Prism.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/);
	delete Prism.languages.typescript["parameter"];
	delete Prism.languages.typescript["literal-property"];
	var typeInside = Prism.languages.extend("typescript", {});
	delete typeInside["class-name"];
	Prism.languages.typescript["class-name"].inside = typeInside;
	Prism.languages.insertBefore("typescript", "function", {
		"decorator": {
			pattern: /@[$\w\xA0-\uFFFF]+/,
			inside: {
				"at": {
					pattern: /^@/,
					alias: "operator"
				},
				"function": /^[\s\S]+/
			}
		},
		"generic-function": {
			pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
			greedy: true,
			inside: {
				"function": /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
				"generic": {
					pattern: /<[\s\S]+/,
					alias: "class-name",
					inside: typeInside
				}
			}
		}
	});
	Prism.languages.ts = Prism.languages.typescript;
})(Prism);

//#endregion
//#region node_modules/prismjs/components/prism-css.js
(function(Prism) {
	var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
	Prism.languages.css = {
		"comment": /\/\*[\s\S]*?\*\//,
		"atrule": {
			pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + string.source + ")*?" + /(?:;|(?=\s*\{))/.source),
			inside: {
				"rule": /^@[\w-]+/,
				"selector-function-argument": {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: true,
					alias: "selector"
				},
				"keyword": {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: true
				}
			}
		},
		"url": {
			pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
			greedy: true,
			inside: {
				"function": /^url/i,
				"punctuation": /^\(|\)$/,
				"string": {
					pattern: RegExp("^" + string.source + "$"),
					alias: "url"
				}
			}
		},
		"selector": {
			pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + string.source + ")*(?=\\s*\\{)"),
			lookbehind: true
		},
		"string": {
			pattern: string,
			greedy: true
		},
		"property": {
			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: true
		},
		"important": /!important\b/i,
		"function": {
			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
			lookbehind: true
		},
		"punctuation": /[(){};:,]/
	};
	Prism.languages.css["atrule"].inside.rest = Prism.languages.css;
	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined("style", "css");
		markup.tag.addAttribute("style", "css");
	}
})(Prism);

//#endregion
//#region node_modules/prismjs/components/prism-markup.js
Prism.languages.markup = {
	"comment": {
		pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
		greedy: true
	},
	"prolog": {
		pattern: /<\?[\s\S]+?\?>/,
		greedy: true
	},
	"doctype": {
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: true,
		inside: {
			"internal-subset": {
				pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
				lookbehind: true,
				greedy: true,
				inside: null
			},
			"string": {
				pattern: /"[^"]*"|'[^']*'/,
				greedy: true
			},
			"punctuation": /^<!|>$|[[\]]/,
			"doctype-tag": /^DOCTYPE/i,
			"name": /[^\s<>'"]+/
		}
	},
	"cdata": {
		pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
		greedy: true
	},
	"tag": {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: true,
		inside: {
			"tag": {
				pattern: /^<\/?[^\s>\/]+/,
				inside: {
					"punctuation": /^<\/?/,
					"namespace": /^[^\s>\/:]+:/
				}
			},
			"special-attr": [],
			"attr-value": {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: { "punctuation": [{
					pattern: /^=/,
					alias: "attr-equals"
				}, {
					pattern: /^(\s*)["']|["']$/,
					lookbehind: true
				}] }
			},
			"punctuation": /\/?>/,
			"attr-name": {
				pattern: /[^\s>\/]+/,
				inside: { "namespace": /^[^\s>\/:]+:/ }
			}
		}
	},
	"entity": [{
		pattern: /&[\da-z]{1,8};/i,
		alias: "named-entity"
	}, /&#x?[\da-f]{1,8};/i]
};
Prism.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism.languages.markup["entity"];
Prism.languages.markup["doctype"].inside["internal-subset"].inside = Prism.languages.markup;
Prism.hooks.add("wrap", function(env) {
	if (env.type === "entity") env.attributes["title"] = env.content.replace(/&amp;/, "&");
});
Object.defineProperty(Prism.languages.markup.tag, "addInlined", { value: function addInlined(tagName, lang) {
	var includedCdataInside = {};
	includedCdataInside["language-" + lang] = {
		pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
		lookbehind: true,
		inside: Prism.languages[lang]
	};
	includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
	var inside = { "included-cdata": {
		pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
		inside: includedCdataInside
	} };
	inside["language-" + lang] = {
		pattern: /[\s\S]+/,
		inside: Prism.languages[lang]
	};
	var def = {};
	def[tagName] = {
		pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
			return tagName;
		}), "i"),
		lookbehind: true,
		greedy: true,
		inside
	};
	Prism.languages.insertBefore("markup", "cdata", def);
} });
Object.defineProperty(Prism.languages.markup.tag, "addAttribute", { value: function(attrName, lang) {
	Prism.languages.markup.tag.inside["special-attr"].push({
		pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
		lookbehind: true,
		inside: {
			"attr-name": /^[^\s=]+/,
			"attr-value": {
				pattern: /=[\s\S]+/,
				inside: {
					"value": {
						pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
						lookbehind: true,
						alias: [lang, "language-" + lang],
						inside: Prism.languages[lang]
					},
					"punctuation": [{
						pattern: /^=/,
						alias: "attr-equals"
					}, /"|'/]
				}
			}
		}
	});
} });
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
Prism.languages.xml = Prism.languages.extend("markup", {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;

//#endregion
//#region node_modules/prismjs/components/prism-bash.js
(function(Prism) {
	var envVars = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b";
	var commandAfterHeredoc = {
		pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
		lookbehind: true,
		alias: "punctuation",
		inside: null
	};
	var insideString = {
		"bash": commandAfterHeredoc,
		"environment": {
			pattern: RegExp("\\$" + envVars),
			alias: "constant"
		},
		"variable": [
			{
				pattern: /\$?\(\([\s\S]+?\)\)/,
				greedy: true,
				inside: {
					"variable": [{
						pattern: /(^\$\(\([\s\S]+)\)\)/,
						lookbehind: true
					}, /^\$\(\(/],
					"number": /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
					"operator": /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
					"punctuation": /\(\(?|\)\)?|,|;/
				}
			},
			{
				pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
				greedy: true,
				inside: { "variable": /^\$\(|^`|\)$|`$/ }
			},
			{
				pattern: /\$\{[^}]+\}/,
				greedy: true,
				inside: {
					"operator": /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
					"punctuation": /[\[\]]/,
					"environment": {
						pattern: RegExp("(\\{)" + envVars),
						lookbehind: true,
						alias: "constant"
					}
				}
			},
			/\$(?:\w+|[#?*!@$])/
		],
		"entity": /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
	};
	Prism.languages.bash = {
		"shebang": {
			pattern: /^#!\s*\/.*/,
			alias: "important"
		},
		"comment": {
			pattern: /(^|[^"{\\$])#.*/,
			lookbehind: true
		},
		"function-name": [{
			pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
			lookbehind: true,
			alias: "function"
		}, {
			pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
			alias: "function"
		}],
		"for-or-select": {
			pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
			alias: "variable",
			lookbehind: true
		},
		"assign-left": {
			pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
			inside: { "environment": {
				pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
				lookbehind: true,
				alias: "constant"
			} },
			alias: "variable",
			lookbehind: true
		},
		"parameter": {
			pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,
			alias: "variable",
			lookbehind: true
		},
		"string": [
			{
				pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
				lookbehind: true,
				greedy: true,
				inside: insideString
			},
			{
				pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
				lookbehind: true,
				greedy: true,
				inside: { "bash": commandAfterHeredoc }
			},
			{
				pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
				lookbehind: true,
				greedy: true,
				inside: insideString
			},
			{
				pattern: /(^|[^$\\])'[^']*'/,
				lookbehind: true,
				greedy: true
			},
			{
				pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
				greedy: true,
				inside: { "entity": insideString.entity }
			}
		],
		"environment": {
			pattern: RegExp("\\$?" + envVars),
			alias: "constant"
		},
		"variable": insideString.variable,
		"function": {
			pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
			lookbehind: true
		},
		"keyword": {
			pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
			lookbehind: true
		},
		"builtin": {
			pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
			lookbehind: true,
			alias: "class-name"
		},
		"boolean": {
			pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
			lookbehind: true
		},
		"file-descriptor": {
			pattern: /\B&\d\b/,
			alias: "important"
		},
		"operator": {
			pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
			inside: { "file-descriptor": {
				pattern: /^\d/,
				alias: "important"
			} }
		},
		"punctuation": /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
		"number": {
			pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
			lookbehind: true
		}
	};
	commandAfterHeredoc.inside = Prism.languages.bash;
	var toBeCopied = [
		"comment",
		"function-name",
		"for-or-select",
		"assign-left",
		"parameter",
		"string",
		"environment",
		"function",
		"keyword",
		"builtin",
		"boolean",
		"file-descriptor",
		"operator",
		"punctuation",
		"number"
	];
	var inside = insideString.variable[1].inside;
	for (var i = 0; i < toBeCopied.length; i++) inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
	Prism.languages.sh = Prism.languages.bash;
	Prism.languages.shell = Prism.languages.bash;
})(Prism);

//#endregion
//#region node_modules/prismjs/components/prism-json.js
Prism.languages.json = {
	"property": {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
		lookbehind: true,
		greedy: true
	},
	"string": {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
		lookbehind: true,
		greedy: true
	},
	"comment": {
		pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
		greedy: true
	},
	"number": /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	"punctuation": /[{}[\],]/,
	"operator": /:/,
	"boolean": /\b(?:false|true)\b/,
	"null": {
		pattern: /\bnull\b/,
		alias: "keyword"
	}
};
Prism.languages.webmanifest = Prism.languages.json;

//#endregion
//#region node_modules/prismjs/components/prism-scss.js
Prism.languages.scss = Prism.languages.extend("css", {
	"comment": {
		pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
		lookbehind: true
	},
	"atrule": {
		pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
		inside: { "rule": /@[\w-]+/ }
	},
	"url": /(?:[-a-z]+-)?url(?=\()/i,
	"selector": {
		pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
		inside: {
			"parent": {
				pattern: /&/,
				alias: "important"
			},
			"placeholder": /%[-\w]+/,
			"variable": /\$[-\w]+|#\{\$[-\w]+\}/
		}
	},
	"property": {
		pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
		inside: { "variable": /\$[-\w]+|#\{\$[-\w]+\}/ }
	}
});
Prism.languages.insertBefore("scss", "atrule", { "keyword": [/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i, {
	pattern: /( )(?:from|through)(?= )/,
	lookbehind: true
}] });
Prism.languages.insertBefore("scss", "important", { "variable": /\$[-\w]+|#\{\$[-\w]+\}/ });
Prism.languages.insertBefore("scss", "function", {
	"module-modifier": {
		pattern: /\b(?:as|hide|show|with)\b/i,
		alias: "keyword"
	},
	"placeholder": {
		pattern: /%[-\w]+/,
		alias: "selector"
	},
	"statement": {
		pattern: /\B!(?:default|optional)\b/i,
		alias: "keyword"
	},
	"boolean": /\b(?:false|true)\b/,
	"null": {
		pattern: /\bnull\b/,
		alias: "keyword"
	},
	"operator": {
		pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
		lookbehind: true
	}
});
Prism.languages.scss["atrule"].inside.rest = Prism.languages.scss;

//#endregion
//#region ts/components/codesnippet.ts
var CodeSnippet = class extends HTMLElement {
	static observedAttributes = ["lang", "preview"];
	constructor() {
		super();
	}
	connectedCallback() {
		this.render();
		this.initCopyButton();
	}
	attributeChangedCallback(name, oldValue, newValue) {
		if (oldValue !== newValue) this.render();
	}
	render() {
		const lang = this.getAttribute("lang") || "html";
		const previewAttr = this.getAttribute("preview");
		const langLabel = this.querySelector(".codesnippet-lang");
		if (langLabel) langLabel.textContent = lang.toUpperCase();
		const codeElement = this.querySelector(".codesnippet-code code");
		if (codeElement) {
			codeElement.className = `language-${lang}`;
			import_prism.default.highlightElement(codeElement);
		}
		const previewArea = this.querySelector(".codesnippet-preview");
		if (previewArea) {
			Array.from(previewArea.classList).forEach((cls) => {
				if (cls.startsWith("codesnippet-preview-")) previewArea.classList.remove(cls);
			});
			if (previewAttr && previewAttr !== "true") previewArea.classList.add(`codesnippet-preview-${previewAttr}`);
		}
	}
	initCopyButton() {
		const copyBtn = this.querySelector(".codesnippet-copy-btn");
		const codeElement = this.querySelector(".codesnippet-code code");
		if (copyBtn && codeElement) copyBtn.addEventListener("click", async () => {
			const text = codeElement.textContent || "";
			try {
				await navigator.clipboard.writeText(text);
				const icon = copyBtn.querySelector("i");
				if (icon) {
					icon.classList.replace("ail-copy", "ail-check");
					copyBtn.classList.add("is-copied");
					setTimeout(() => {
						icon.classList.replace("ail-check", "ail-copy");
						copyBtn.classList.remove("is-copied");
					}, 500);
				}
			} catch (err) {
				console.error("Copy failed", err);
			}
		});
	}
};
if (!customElements.get("code-snippet")) customElements.define("code-snippet", CodeSnippet);

//#endregion
//#region ts/forms/textarea.ts
var Textarea = class extends HTMLTextAreaElement {
	counter;
	constructor() {
		super();
		this.counter = document.createElement("small");
		this.counter.className = "textarea-counter";
	}
	connectedCallback() {
		this.after(this.counter);
		this.addEventListener("input", () => this.updateCount());
		this.updateCount();
	}
	updateCount() {
		const currentLength = this.value.length;
		const maxAttr = this.getAttribute("max");
		const maxLength = maxAttr ? parseInt(maxAttr, 10) : Infinity;
		const displayMax = isFinite(maxLength) ? maxLength.toString() : "∞";
		this.counter.textContent = `${currentLength} / ${displayMax}`;
	}
	disconnectedCallback() {
		this.counter.remove();
	}
};
if (!customElements.get("au-textarea")) customElements.define("au-textarea", Textarea, { extends: "textarea" });

//#endregion