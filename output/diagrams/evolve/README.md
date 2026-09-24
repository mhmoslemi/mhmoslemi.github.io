# EVOLVE diagram set

These figures are separate from the current manuscript source. None of them has been inserted into or used to modify the manuscript.

## Required TikZ setup

```tex
\usepackage{tikz}
\usetikzlibrary{arrows.meta,positioning,calc,fit,backgrounds}
```

For a one-column manuscript, place a diagram inside `figure` and scale it with `\linewidth`. For a two-column manuscript, the detailed pipeline and the wider focused diagrams are best placed inside `figure*` and scaled with `\textwidth`.

```tex
\begin{figure}[t]
\centering
\resizebox{\linewidth}{!}{\input{path-to-diagram}}
\caption{Caption text}
\label{figlabel}
\end{figure}
```

## Suggested placement and captions

### 01 Detailed pipeline

Suggested location after EVOLVE at a Glance

Suggested caption

End-to-end EVOLVE pipeline. The scheduler constructs state, role, option, harness, horizon, and cost arms from the verified archive, promoted causal records, and versioned harness pool. A protected budget supports audits, coverage, roles, and harness trials before the remaining portfolio is selected by posterior record improvement. Role-conditioned production branches and randomized audit pairs use the same external verifier. Admitted states update the archive and record, production outcomes update the tail posterior, matched effects update causal option memory, and homogeneous role data update one LoRA. Every update enters at the next synchronization barrier.

### 02 Archive and provenance

Suggested location after Scientific States and Option Branches

Suggested caption

Local option trees and persistent scientific provenance. Each launch creates an isolated descendant tree from a verified archive state. Completed descendants pass through the common verifier and the frozen scientific descriptor map. Different branches may enter the same scientific cell while retaining separate identities and lineages. EVOLVE therefore uses local execution trees together with an archive-linked provenance graph rather than one global search tree.

### 03 Agent and memory isolation

Suggested location after Three Isolated Agent Roles

Suggested caption

Role and memory isolation in EVOLVE. Scout, Mechanist, and Challenger share one read-only backbone and a verified public layer. Each role retains a separate LoRA, optimizer, working memory, random stream, retrieval view, and raw branch transcript. Verified packets cross role boundaries at synchronization barriers, while each LoRA learns from its own homogeneous verified group.

### 04 Adaptive harness allocation

Suggested location after Adaptive Allocation and Harness Selection

Suggested caption

Contextual allocation with versioned harnesses. Each allocation arm combines a scientific context with one harness version. The joint posterior models admission, the admitted upper tail, and dependence between arms. The selected portfolio respects the current record, remaining budget, and reserved support. A harness may change between branches, while every active branch keeps its selected version and uses the same external verifier.

### 05 Randomized audit memory

Suggested location after Verification, Feedback, and Causal Memory

Suggested caption

Causal option evidence from matched randomized audits. Test and control branches begin from the same frozen context and receive the same harness, horizon, cost, and verifier. Their descendant gains form a local paired effect. Repeated closed audit blocks support promotion into contextual option memory, while a no-memory audit remains active. Production evidence continues to update scheduling rather than causal attribution.

### 06 Test-time learning and refinement

Suggested location after Test-Time Policy Learning or Bounded Refinement

Suggested caption

Role-local test-time learning and bounded refinement. On-policy branches from one homogeneous frozen group are independently verified before Top-m-at-K credit updates the selected role LoRA. The backbone and other role adapters remain unchanged. A provisional candidate follows a separate bounded refinement path and enters a separate learning group after blinded re-verification.

## Preview files

High-resolution PNG previews are stored in the `previews` directory. The TikZ files remain the editable publication sources.
