(function() {var type_impls = {
"frontier_template_runtime":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DigestItem\" class=\"impl\"><a href=\"#impl-DigestItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl DigestItem</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.dref\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">dref</a>(&amp;self) -&gt; DigestItemRef&lt;'_&gt;</h4></section></summary><div class=\"docblock\"><p>Returns a ‘referencing view’ for this digest item.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_pre_runtime\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">as_pre_runtime</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;([<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">4</a>], &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>])&gt;</h4></section></summary><div class=\"docblock\"><p>Returns <code>Some</code> if this entry is the <code>PreRuntime</code> entry.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_consensus\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">as_consensus</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;([<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">4</a>], &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>])&gt;</h4></section></summary><div class=\"docblock\"><p>Returns <code>Some</code> if this entry is the <code>Consensus</code> entry.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_seal\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">as_seal</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;([<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">4</a>], &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>])&gt;</h4></section></summary><div class=\"docblock\"><p>Returns <code>Some</code> if this entry is the <code>Seal</code> entry.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_other\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">as_other</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;</h4></section></summary><div class=\"docblock\"><p>Returns Some if <code>self</code> is a <code>DigestItem::Other</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_as_raw\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">try_as_raw</a>(&amp;self, id: OpaqueDigestItemId&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the opaque data contained in the item if <code>Some</code> if this entry has the id given.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_to\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">try_to</a>&lt;T&gt;(&amp;self, id: OpaqueDigestItemId&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: Decode,</span></h4></section></summary><div class=\"docblock\"><p>Returns the data contained in the item if <code>Some</code> if this entry has the id given, decoded\nto the type provided <code>T</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.seal_try_to\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">seal_try_to</a>&lt;T&gt;(&amp;self, id: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">4</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: Decode,</span></h4></section></summary><div class=\"docblock\"><p>Try to match this to a <code>Self::Seal</code>, check <code>id</code> matches and decode it.</p>\n<p>Returns <code>None</code> if this isn’t a seal item, the <code>id</code> doesn’t match or when the decoding fails.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.consensus_try_to\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">consensus_try_to</a>&lt;T&gt;(&amp;self, id: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">4</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: Decode,</span></h4></section></summary><div class=\"docblock\"><p>Try to match this to a <code>Self::Consensus</code>, check <code>id</code> matches and decode it.</p>\n<p>Returns <code>None</code> if this isn’t a consensus item, the <code>id</code> doesn’t match or\nwhen the decoding fails.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.pre_runtime_try_to\" class=\"method\"><h4 class=\"code-header\">pub fn <a class=\"fn\">pre_runtime_try_to</a>&lt;T&gt;(&amp;self, id: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">4</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: Decode,</span></h4></section></summary><div class=\"docblock\"><p>Try to match this to a <code>Self::PreRuntime</code>, check <code>id</code> matches and decode it.</p>\n<p>Returns <code>None</code> if this isn’t a pre-runtime item, the <code>id</code> doesn’t match or\nwhen the decoding fails.</p>\n</div></details></div></details>",0,"frontier_template_runtime::DigestItem"],["<section id=\"impl-StructuralEq-for-DigestItem\" class=\"impl\"><a href=\"#impl-StructuralEq-for-DigestItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralEq.html\" title=\"trait core::marker::StructuralEq\">StructuralEq</a> for DigestItem</h3></section>","StructuralEq","frontier_template_runtime::DigestItem"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-DigestItem\" class=\"impl\"><a href=\"#impl-Clone-for-DigestItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for DigestItem</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; DigestItem</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","frontier_template_runtime::DigestItem"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-DigestItem\" class=\"impl\"><a href=\"#impl-Debug-for-DigestItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for DigestItem</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","frontier_template_runtime::DigestItem"],["<section id=\"impl-EncodeLike-for-DigestItem\" class=\"impl\"><a href=\"#impl-EncodeLike-for-DigestItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl EncodeLike for DigestItem</h3></section>","EncodeLike","frontier_template_runtime::DigestItem"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'a%3E-for-DigestItem\" class=\"impl\"><a href=\"#impl-Deserialize%3C'a%3E-for-DigestItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt; for DigestItem</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;D&gt;(de: D) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DigestItem, &lt;D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'a&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'a&gt;,</span></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.197/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'a>","frontier_template_runtime::DigestItem"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decode-for-DigestItem\" class=\"impl\"><a href=\"#impl-Decode-for-DigestItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Decode for DigestItem</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method trait-impl\"><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DigestItem, Error&gt;<span class=\"where fmt-newline\">where\n    I: Input,</span></h4></section></summary><div class='docblock'>Attempt to deserialise the value from input.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode_into\" class=\"method trait-impl\"><a href=\"#method.decode_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">decode_into</a>&lt;I&gt;(\n    input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut I</a>,\n    dst: &amp;mut <a class=\"union\" href=\"https://doc.rust-lang.org/nightly/core/mem/maybe_uninit/union.MaybeUninit.html\" title=\"union core::mem::maybe_uninit::MaybeUninit\">MaybeUninit</a>&lt;Self&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;DecodeFinished, Error&gt;<span class=\"where fmt-newline\">where\n    I: Input,</span></h4></section></summary><div class='docblock'>Attempt to deserialize the value from input into a pre-allocated piece of memory. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.skip\" class=\"method trait-impl\"><a href=\"#method.skip\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">skip</a>&lt;I&gt;(input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, Error&gt;<span class=\"where fmt-newline\">where\n    I: Input,</span></h4></section></summary><div class='docblock'>Attempt to skip the encoded value from input. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_fixed_size\" class=\"method trait-impl\"><a href=\"#method.encoded_fixed_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_fixed_size</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;</h4></section></summary><div class='docblock'>Returns the fixed encoded size of the type. <a>Read more</a></div></details></div></details>","Decode","frontier_template_runtime::DigestItem"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encode-for-DigestItem\" class=\"impl\"><a href=\"#impl-Encode-for-DigestItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Encode for DigestItem</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Convert self to an owned vector.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.size_hint\" class=\"method trait-impl\"><a href=\"#method.size_hint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">size_hint</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>If possible give a hint of expected size of the encoding. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_to\" class=\"method trait-impl\"><a href=\"#method.encode_to\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encode_to</a>&lt;T&gt;(&amp;self, dest: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut T</a>)<span class=\"where fmt-newline\">where\n    T: Output + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span></h4></section></summary><div class='docblock'>Convert self to a slice and append it to the destination.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.using_encoded\" class=\"method trait-impl\"><a href=\"#method.using_encoded\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">using_encoded</a>&lt;R, F&gt;(&amp;self, f: F) -&gt; R<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.FnOnce.html\" title=\"trait core::ops::function::FnOnce\">FnOnce</a>(&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]) -&gt; R,</span></h4></section></summary><div class='docblock'>Convert self to a slice and then invoke the given closure with it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encoded_size\" class=\"method trait-impl\"><a href=\"#method.encoded_size\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">encoded_size</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Calculates the encoded size. <a>Read more</a></div></details></div></details>","Encode","frontier_template_runtime::DigestItem"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-DigestItem\" class=\"impl\"><a href=\"#impl-PartialEq-for-DigestItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for DigestItem</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;DigestItem) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#239\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","frontier_template_runtime::DigestItem"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CheckEqual-for-DigestItem\" class=\"impl\"><a href=\"#impl-CheckEqual-for-DigestItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl CheckEqual for DigestItem</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.check_equal\" class=\"method trait-impl\"><a href=\"#method.check_equal\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">check_equal</a>(&amp;self, other: &amp;DigestItem)</h4></section></summary><div class='docblock'>Perform the equality check.</div></details></div></details>","CheckEqual","frontier_template_runtime::DigestItem"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TypeInfo-for-DigestItem\" class=\"impl\"><a href=\"#impl-TypeInfo-for-DigestItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl TypeInfo for DigestItem</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Identity\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Identity\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Identity</a> = DigestItem</h4></section></summary><div class='docblock'>The type identifying for which type info is provided. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.type_info\" class=\"method trait-impl\"><a href=\"#method.type_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">type_info</a>() -&gt; Type</h4></section></summary><div class='docblock'>Returns the static type identifier for <code>Self</code>.</div></details></div></details>","TypeInfo","frontier_template_runtime::DigestItem"],["<section id=\"impl-Eq-for-DigestItem\" class=\"impl\"><a href=\"#impl-Eq-for-DigestItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for DigestItem</h3></section>","Eq","frontier_template_runtime::DigestItem"],["<section id=\"impl-StructuralPartialEq-for-DigestItem\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-DigestItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for DigestItem</h3></section>","StructuralPartialEq","frontier_template_runtime::DigestItem"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-DigestItem\" class=\"impl\"><a href=\"#impl-Serialize-for-DigestItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for DigestItem</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;S&gt;(\n    &amp;self,\n    seq: S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</span></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","frontier_template_runtime::DigestItem"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-CompatibleDigestItem%3CSignature%3E-for-DigestItem\" class=\"impl\"><a href=\"#impl-CompatibleDigestItem%3CSignature%3E-for-DigestItem\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Signature&gt; CompatibleDigestItem&lt;Signature&gt; for DigestItem<span class=\"where fmt-newline\">where\n    Signature: Codec,</span></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.aura_seal\" class=\"method trait-impl\"><a href=\"#method.aura_seal\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">aura_seal</a>(signature: Signature) -&gt; DigestItem</h4></section></summary><div class='docblock'>Construct a digest item which contains a signature on the hash.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_aura_seal\" class=\"method trait-impl\"><a href=\"#method.as_aura_seal\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">as_aura_seal</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Signature&gt;</h4></section></summary><div class='docblock'>If this item is an Aura seal, return the signature.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.aura_pre_digest\" class=\"method trait-impl\"><a href=\"#method.aura_pre_digest\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">aura_pre_digest</a>(slot: Slot) -&gt; DigestItem</h4></section></summary><div class='docblock'>Construct a digest item which contains the slot number</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_aura_pre_digest\" class=\"method trait-impl\"><a href=\"#method.as_aura_pre_digest\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">as_aura_pre_digest</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Slot&gt;</h4></section></summary><div class='docblock'>If this item is an AuRa pre-digest, return the slot number</div></details></div></details>","CompatibleDigestItem<Signature>","frontier_template_runtime::DigestItem"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()