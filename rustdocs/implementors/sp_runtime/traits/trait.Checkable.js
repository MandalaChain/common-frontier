(function() {var implementors = {
"fp_self_contained":[["impl&lt;Address, AccountId, Call, Signature, Extra, Lookup&gt; Checkable&lt;Lookup&gt; for <a class=\"struct\" href=\"fp_self_contained/struct.UncheckedExtrinsic.html\" title=\"struct fp_self_contained::UncheckedExtrinsic\">UncheckedExtrinsic</a>&lt;Address, Call, Signature, Extra&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Address: Member + MaybeDisplay,<br>&nbsp;&nbsp;&nbsp;&nbsp;Call: Encode + Member + <a class=\"trait\" href=\"fp_self_contained/trait.SelfContainedCall.html\" title=\"trait fp_self_contained::SelfContainedCall\">SelfContainedCall</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;Signature: Member + Verify,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Signature as Verify&gt;::Signer: IdentifyAccount&lt;AccountId = AccountId&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Extra: SignedExtension&lt;AccountId = AccountId&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;AccountId: Member + MaybeDisplay,<br>&nbsp;&nbsp;&nbsp;&nbsp;Lookup: Lookup&lt;Source = Address, Target = AccountId&gt;,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()